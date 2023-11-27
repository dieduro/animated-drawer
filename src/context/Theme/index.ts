
type Colors = {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  white: string;
};
export const colors: Colors = {
  primary: '#EF6767',
  secondary: '#1b1d2e',
  tertiary: '#64748bCC',
  background: '#1b1d2e',
  white: '#ffffff',
};

type Theme = {
  colors: Colors;
};

export const theme: Theme = {
  colors,
};