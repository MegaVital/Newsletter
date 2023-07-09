import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { NewsLetter } from './NewsLetter';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 1000,
      xl: 1536,
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
            backgroundColor: '#232742',
            color: '#fff',
          }),
          '&:hover': {
            background: 'linear-gradient(to right, #ff537b, #ff693b)',
          },
        }),
      },
    },
  },
});

theme.typography.h3 = {
  fontSize: '3.1rem',
  letterSpacing: '-0.025em',
  lineHeight: "1",
  '@media (max-width:1200px)': {
    fontSize: '2.5rem',
  },
};
theme.typography.h6 = {
  fontWeight: '400',
  fontSize: '14px',
  letterSpacing: '0.00938em'
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NewsLetter />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
