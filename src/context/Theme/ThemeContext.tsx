import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '.';


const StyledThemeProvider = (
  { children }: { children: ReactNode },
) => {
  return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
  );
};

export { StyledThemeProvider };
