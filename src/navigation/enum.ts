export enum ScreenName {
  START = 'index',
  CART = 'cart',
  FAVOURITES = 'favourites',
  ORDERS = 'orders',
}


export const ScreenTitles: { [key in ScreenName]: string; } = {
  [ScreenName.START]: 'Start',
  [ScreenName.CART]: 'Your Cart',
  [ScreenName.FAVOURITES]: 'Favourites',
  [ScreenName.ORDERS]: 'Your Orders',
};

export const Screens = [
  { name: ScreenName.START, title: ScreenTitles[ScreenName.START] },
  { name: ScreenName.CART, title: ScreenTitles[ScreenName.CART] },
  { name: ScreenName.FAVOURITES, title: ScreenTitles[ScreenName.FAVOURITES] },
  { name: ScreenName.ORDERS, title: ScreenTitles[ScreenName.ORDERS] },
];