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