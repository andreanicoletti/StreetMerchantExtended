import {LabelQuery, Store, Pricing} from './model/store';
import {Page} from 'puppeteer';
import {Link, SearchProduct, LabelElement} from './model/store';
import {Selector} from './includes-labels';
import {logger} from '../logger';

export function isLink(item: SearchProduct | Link): item is Link {
  return (item as Link).url !== undefined;
}

export function isSearchProduct(
  item: SearchProduct | Link
): item is SearchProduct {
  return (item as SearchProduct).searchPageUrl !== undefined;
}

export async function getInStockSearchProducts(
  page: Page,
  store: Store
): Promise<
  {
    url: string;
    outOfStock: boolean;
    price: number | null;
  }[]
> {
  if (store.searchPage === undefined) {
    return [];
  }

  const productSelector = store.searchPage.productContainer;
  const inStockLabel = store.searchPage.inStock;
  const productUrlSelector = store.searchPage.urlSelector;
  const searchPricing = store.searchPage.pricing;

  await page.waitForSelector(productSelector);
  return page.evaluate(
    async (
      container: string,
      inStock: LabelQuery,
      url: string,
      pricing: Pricing
    ) => {
      const elements = document.querySelectorAll(container);
      if (elements === undefined || elements === null) {
        return [];
      }

      const isElementArray = function (
        query: LabelQuery
      ): query is LabelElement[] {
        return (
          Array.isArray(query) &&
          query.length > 0 &&
          typeof query[0] === 'object'
        );
      };

      const getQueryAsElementArray = function (
        query: LabelQuery,
        defaultContainer: string
      ): Array<Required<LabelElement>> {
        if (isElementArray(query)) {
          return query.map(x => ({
            container: x.container ?? defaultContainer,
            text: x.text,
          }));
        }

        if (Array.isArray(query)) {
          return [
            {
              container: defaultContainer,
              text: query,
            },
          ];
        }

        return [
          {
            container: query.container ?? defaultContainer,
            text: query.text,
          },
        ];
      };
      const extractElementContents = async function (
        element: Element,
        options: Selector
      ): Promise<string | null> {
        const selectedElement: globalThis.HTMLElement | null = element.querySelector(
          options.selector
        );
        if (selectedElement === null || selectedElement === undefined) {
          return null;
        }
        if (
          options.requireVisible &&
          !(selectedElement.offsetWidth > 0 && selectedElement.offsetHeight > 0)
        ) {
          return null;
        }
        switch (options.type) {
          case 'innerHTML':
            return element.innerHTML;
          case 'outerHTML':
            return element.outerHTML;
          case 'textContent':
            return element.textContent;
          default:
            return null;
        }
      };

      const includesLabels = function (
        domText: string,
        searchLabels: string[]
      ): boolean {
        const domTextLowerCase = domText.toLowerCase();
        return searchLabels.some(label =>
          domTextLowerCase.includes(label.toLowerCase())
        );
      };

      const elementIncludesLabels = async function (
        element: Element,
        query: LabelQuery,
        options: Selector
      ) {
        const elementQueries = getQueryAsElementArray(query, options.selector);

        const resolved = await Promise.all(
          elementQueries.map(async query => {
            const selector = {...options, selector: query.container};
            const contents =
              (await extractElementContents(element, selector)) ?? '';

            if (!contents) {
              return false;
            }
            return includesLabels(contents, query.text);
          })
        );

        return resolved.includes(true);
      };

      const getElementPrice = async function (
        element: Element,
        query: Pricing
      ): Promise<number | null> {
        const priceString = element.querySelector(query.container)?.textContent;

        if (priceString) {
          const priceSeparator = query.euroFormat ? /\./g : /,/g;
          const cleanPriceString = priceString
            .replace(/\s/g, '')
            .replace(priceSeparator, '')
            .match(/\d+/g)!
            .join('.');
          const price = Number.parseFloat(cleanPriceString);
          return price;
        }

        return null;
      };

      const getElementUrl = async function (
        element: Element,
        selector: string
      ): Promise<string | null> {
        const options: Selector = {
          requireVisible: true,
          selector: selector,
          type: 'outerHTML',
        };
        const attribute = element.querySelector(selector)?.getAttribute('href');
        if (attribute !== null && attribute !== undefined) {
          return attribute;
        } else {
          const text = await extractElementContents(element, options);
          if (text === null) {
            return 'nullText';
          }
          const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
          const regex = new RegExp(expression);
          const matches = text.match(regex);
          if (matches === null) {
            return 'nullMatches';
          }
          return matches[0];
        }
      };

      const inStockItems: {
        url: string;
        outOfStock: boolean;
        price: number;
      }[] = [];

      const baseOptions: Selector = {
        requireVisible: false,
        selector: container,
        type: 'textContent',
      };
      const itemInStockSelector = {
        ...baseOptions,
        requireVisible: true,
        type: 'outerHTML' as const,
      };

      for (let i = 0; i < elements.length; i++) {
        // inStockItems.push({url: 'wdioawòdjoid', outOfStock: false, price: 10});
        const element = elements.item(i) as Element;
        const isInStock = await elementIncludesLabels(
          element,
          inStock,
          itemInStockSelector
        );
        const elementUrl = await getElementUrl(element, url);
        const price = await getElementPrice(element, pricing);

        inStockItems.push({
          url: elementUrl !== null ? elementUrl : 'adwdwada',
          outOfStock: !isInStock,
          price: price !== null ? price : 0,
        });
      }
      return inStockItems;
    },
    productSelector,
    inStockLabel,
    productUrlSelector,
    searchPricing
  );
}

/*
export async function inStockSearchProducts(
  page: Page,
  store: Store
): Promise<
  {
    url: string;
    outOfStock: boolean;
    price: number | null;
  }[]
> {
  if (store.searchPage === undefined) {
    return [];
  }

  const productSelector = store.searchPage.productContainer;
  const inStockLabel = store.searchPage.inStock;
  const productUrlSelector = store.searchPage.urlSelector;
  const searchPricing = store.searchPage.pricing;

  const inStockItems: {
    url: string;
    outOfStock: boolean;
    price: number;
  }[] = [];

  const handles = await page.$$(productSelector);

  for (const handle of handles) {
    const isInStock = await page.evaluate(
      productHandle => {
        const content: string = productHandle.outerHTML;
        content.includes();
      },
      handle,
      inStockLabel
    );
  }

  return inStockItems;
}

async function getElementUrl(
  element: Element,
  selector: string
): Promise<string | null> {
  const options: Selector = {
    requireVisible: true,
    selector: selector,
    type: 'outerHTML',
  };
  const attribute = element.getAttribute('href');
  if (attribute !== null || attribute !== undefined) {
    return attribute;
  } else {
    const text = await extractElementContents(element, options);
    if (text === null) {
      return null;
    }
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
    const regex = new RegExp(expression);
    const matches = text.match(regex);
    if (matches === null) {
      return null;
    }
    return matches[0];
  }
}

async function elementIncludesLabels(
  element: Element,
  query: LabelQuery,
  options: Selector
) {
  const elementQueries = getQueryAsElementArray(query, options.selector);

  const resolved = await Promise.all(
    elementQueries.map(async query => {
      const selector = {...options, selector: query.container};
      const contents = (await extractElementContents(element, selector)) ?? '';

      if (!contents) {
        return false;
      }
      return includesLabels(contents, query.text);
    })
  );

  return resolved.includes(true);
}

async function extractElementContents(
  element: Element,
  options: Selector
): Promise<string | null> {
  const selectedElement: globalThis.HTMLElement | null = element.querySelector(
    options.selector
  );
  if (selectedElement === null || selectedElement === undefined) {
    return null;
  }
  if (
    options.requireVisible &&
    !(selectedElement.offsetWidth > 0 && selectedElement.offsetHeight > 0)
  ) {
    return null;
  }
  switch (options.type) {
    case 'innerHTML':
      return element.innerHTML;
    case 'outerHTML':
      return element.outerHTML;
    case 'textContent':
      return element.textContent;
    default:
      return null;
  }
}
*/
