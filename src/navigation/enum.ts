export enum ScreenName {
  START = 'start',
  CART = 'cart/index',
  FAVOURITES = 'favourites/index',
  ORDERS = 'orders/index',
  CONTACT = 'contact/index',
}


export const ScreenTitles: { [key in ScreenName]: string; } = {
  [ScreenName.START]: 'Start',
  [ScreenName.CART]: 'Your Cart',
  [ScreenName.FAVOURITES]: 'Favourites',
  [ScreenName.ORDERS]: 'Your Orders',
  [ScreenName.CONTACT]: 'Contact',
};

export const Screens = [
  { name: ScreenName.START, title: ScreenTitles[ScreenName.START] },
  { name: ScreenName.CART, title: ScreenTitles[ScreenName.CART] },
  { name: ScreenName.FAVOURITES, title: ScreenTitles[ScreenName.FAVOURITES] },
  { name: ScreenName.ORDERS, title: ScreenTitles[ScreenName.ORDERS] },
];