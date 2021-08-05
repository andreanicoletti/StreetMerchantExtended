import {Store} from './store';

export const Umart: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '#youhuo_delivery',
      text: ['in stock'],
    },
    maxPrice: {
      container: '.goods-price',
      euroFormat: false,
    },
    outOfStock: {
      container: 'div.price-box > div.stock-label',
      text: ['out of stock'],
    },
  },
  searchPage: {
    productContainer: '.goods_info',
    urlSelector: 'div.goods_name > a',
    pricing: {
      container: 'span[itemprop="price"]',
      euroFormat: false,
    },
    inStock: {
      container: '.goods_stock.graphik-bold',
      text: ['in stock'],
    },
    products: [
      {
        series: '3070',
        searchPageUrl:
          'https://www.umart.com.au/Graphics-Cards---GPU_C.html?id=610&brand=1&price_min=&price_max=&filter=0&filter_attr=90285.0.0.0.0.0.0.0.0.0.0.0.0.0&mystock=1-6-7',
      },
      {
        series: 'rx6900xt',
        searchPageUrl: 'https://www.umart.com.au/Radeon-RX-6900-XT_1069C.html',
      },
    ],
  },
  links: [
    {
      brand: 'sapphire',
      model: 'nitro+ se',
      series: 'rx6900xt',
      url:
        'https://www.umart.com.au/Sapphire-Radeon-RX-6900-XT-SE-Nitro+16G-Graphics-Card_59048G.html',
    },
    {
      brand: 'asrock',
      model: 'gaming oc',
      series: 'rx6900xt',
      url:
        'https://www.umart.com.au/Asrock-Radeon-RX-6900-XT-Phantom-Gaming-D-16G-OC-Graphics-Card_58775G.html',
    },
    {
      brand: 'asus',
      model: 'oc',
      series: 'rx6900xt',
      url:
        'https://www.umart.com.au/Asus-TUF-Radeon-RX-6900-XT-16G-OC-Graphics-Card_58365G.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: 'rx6900xt',
      url:
        'https://www.umart.com.au/Gigabyte-Radeon-RX-6900-XT-Gaming-16G-OC-Graphics-Card_57999G.html',
    },
    {
      brand: 'sapphire',
      model: 'xtreme',
      series: 'rx6900xt',
      url:
        'https://www.umart.com.au/Sapphire-Radeon-RX-6900-XT-Toxic-16G-Graphics-Card-Extreme-Edition_59027G.html',
    },
    {
      brand: 'asus',
      model: 'gaming oc',
      series: '3070',
      url:
        'https://www.umart.com.au/Asus-GeForce-RTX-3070-TUF-Gaming-OC-8G-Graphics-Card_57243G.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url:
        'https://www.umart.com.au/Asus-ROG-Strix-GeForce-RTX-3080-10G-Graphics-Card_56894G.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url:
        'https://www.umart.com.au/Asus-ROG-Strix-GeForce-RTX-3080-OC-10G-Graphics-Card_56893G.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url:
        'https://www.umart.com.au/Asus-GeForce-RTX-3080-TUF-Gaming-10G-Graphics-Card_56792G.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url:
        'https://www.umart.com.au/Asus-GeForce-RTX-3080-TUF-Gaming-OC-10G-Graphics-Card_56895G.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url:
        'https://www.umart.com.au/EVGA-GeForce-RTX-3080-FTW3-Ultra-Gaming-10G-Graphics-Card_57050G.html',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url:
        'https://www.umart.com.au/EVGA-GeForce-RTX-3080-XC3-Ultra-Gaming-10G-Graphics-Card_57049G.html',
    },
    {
      brand: 'galax',
      model: 'sg oc',
      series: '3080',
      url:
        'https://www.umart.com.au/Galax-GeForce-RTX-3080-SG--1-Click-OC--10G-Graphics-Card_56817G.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url:
        'https://www.umart.com.au/Gigabyte-Aorus-GeForce-RTX-3080-Master-10G-Graphics-Card_56885G.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url:
        'https://www.umart.com.au/Gigabyte-AORUS-GeForce-RTX-3080-Xtreme-10G-Graphics-Card_56969G.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '3080',
      url:
        'https://www.umart.com.au/Gigabyte-Aorus-GeForce-RTX-3080-Xtreme-Waterforce-10G-Graphics-Card_57650G.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url:
        'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Xtreme-WaterForce-WB-10G-Graphics-Card_57486G.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3080',
      url:
        'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Eagle-10G-Graphics-Card_57335G.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url:
        'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Eagle-OC-10G-Graphics-Card_56791G.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url:
        'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Gaming-OC-10G-Graphics-Card_56790G.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url:
        'https://www.umart.com.au/Gigabyte-GeForce-RTX-3080-Vision-10G-OC-Graphics-Card_56886G.html',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3080',
      url:
        'https://www.umart.com.au/Inno3D-GeForce-RTX-3080-iCHILL-X4-10G-Graphics-Card_56962G.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url:
        'https://www.umart.com.au/MSI-GeForce-RTX-3080-Gaming-X-Trio-10G-Graphics-Card_56788G.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url:
        'https://www.umart.com.au/MSI-GeForce-RTX-3080-Suprim-X-10G-Graphics-Card_57617G.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.umart.com.au/MSI-GeForce-RTX-3080-Ventus-3X-10G-Graphics-Card_56789G.html',
    },
  ],
  name: 'umart',
};
