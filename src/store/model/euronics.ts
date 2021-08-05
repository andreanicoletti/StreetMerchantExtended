import {Store} from './store';

export const Euronics: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.purchaseButtonsWidth',
      text: ['Aggiungi al carrello'],
    },
  },
  searchPage: {
    productContainer: 'div.productCard',
    urlSelector: 'a[onClick]',
    pricing: {
      euroFormat: true,
      container: 'span.productCard__price',
    },
    inStock: {
      container: 'span.button__title--iconTxt',
      text: ['acquista online'],
    },
    products: [
      {
        series: 'sonyps5c',
        searchPageUrl:
          'https://www.euronics.it/console/sony-computer/cat110087/?params=marca::sony+computer;piattaforma::ps5;',
      },
      {
        series: 'sonyps4c',
        searchPageUrl:
          'https://www.euronics.it/console/sony-computer/cat110087/?params=marca::sony+computer;piattaforma::ps4;',
      },
    ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps4 console',
      series: 'sonyps4c',
      url:
        'https://www.euronics.it/console/sony-computer/ps4-500gb-f-chassis/eProd182024956/',
    },
    {
      brand: 'sony',
      model: 'ps4 console',
      series: 'sonyps4c',
      url:
        'https://www.euronics.it/console/sony-computer/ps4-500gbfifa21fut-21-vch/eProd202008803/',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.euronics.it/console/sony-computer/playstation-5/eProd202008906/',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.euronics.it/console/sony-computer/playstation-5/eProd202008906',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.euronics.it/console/sony-computer/playstation-5-digital-edition/eProd202008907',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.euronics.it/console/microsoft/xbox-series-x-1tb-it-italy-sxto/eProd202008981',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url:
        'https://www.euronics.it/console/microsoft/xbox-series-s-512gb-it-italy-ltsn/eProd202008982',
    },
  ],
  name: 'euronics',
};
