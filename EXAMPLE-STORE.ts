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
    productUrlContainer: 'div.goods_name',
  },
  products: [
    {
      brand: 'asus',
      model: 'radeon',
      series: '6900',
      searchPage: 'https://www.umart.com.au/Radeon-RX-6900-XT_1069C.html',
      validUrls: [
        'https://www.umart.com.au/Sapphire-Radeon-RX-6900-XT-SE-Nitro+16G-Graphics-Card_59048G.html',
        'https://www.umart.com.au/Asrock-Radeon-RX-6900-XT-Phantom-Gaming-D-16G-OC-Graphics-Card_58775G.html',
        'https://www.umart.com.au/Asus-TUF-Radeon-RX-6900-XT-16G-OC-Graphics-Card_58365G.html',
        'https://www.umart.com.au/Gigabyte-Radeon-RX-6900-XT-Gaming-16G-OC-Graphics-Card_57999G.html',
        'https://www.umart.com.au/Sapphire-Radeon-RX-6900-XT-Toxic-16G-Graphics-Card-Extreme-Edition_59027G.html',
      ],
    },
  ],
  links: [
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
  ],
  name: 'umart',
};
