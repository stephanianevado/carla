import { createGlobalStyle } from 'styled-components'

export type ThemeColor = keyof typeof Theme.colors
export type ThemeFontSize = keyof typeof Theme.fontSize

export const Theme = {
  colors: {
    black: '#1A2029',
    darkBlue: '#131358',
    deepBlue: '#0B1CD5',
    dandelion: '#694B11',
    cornBlue: '#131b86',
    blue: '#0019FF',
    liteBlue: '#2765FF',
    lightBlue: '#9DC1F7',
    celeste: '#F4F8FB',
    darkRed: '#7C121F',
    red: '#A1172C',
    orange: '#DC304F',
    litePink: '#FFF5F2',
    pink: '#FFD8C2',
    white: '#FFFFFF',
    darkGray: '#B7B7B7',
    semiDarkGray: '#DFDFDF',
    gray: '#EEEEEE',
    lightGray: '#F6F6F6',
    softGray: '#FBFBFB',
    wildRose: '#FBEDEA',
  },
  breakpoints: {
    mobileS: '@media (min-width: 320px)',
    mobileM: '@media (min-width: 375px)',
    mobileL: '@media (min-width: 425px)',
    tablet: '@media (min-width: 768px)',
    laptop: '@media (min-width: 1024px)',
    laptopM: '@media (min-width: 1260px)',
    laptopL: '@media (min-width: 1440px)',
    desktop: '@media (min-width: 2560px)',
  },
  fontSize: {
    xsmall: '0.75rem',
    small: '0.875rem',
    normal: '1.125rem',
    medium: '1.5rem',
    large: '2.5rem',
    xlarge: '4rem',
  },
  fontFamily: {
    font: 'Poppins',
  },
  fontWeight: {
    semiBold: '500',
    bold: '900',
    normal: 'normal',
  },
  lineHeight: {
    small: '1rem',
    normal: '1.5rem',
    large: '2rem',
  },
}

export const GlobalStyle = createGlobalStyle`
  html, 
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: ${Theme.colors.celeste};
  }

  body {
    display: flex; 
    flex-direction: column; 
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  input {
    font-family: ${Theme.fontFamily.font};
    margin-top: 0;
  }

  body,
  p,
  a,
  footer {
    font-family: ${Theme.fontFamily.font};
    font-size: ${Theme.fontSize.normal};
    font-weight: ${Theme.fontWeight.normal};
    line-height: ${Theme.lineHeight.normal};
    color: ${Theme.colors.black};
  }

  li {
    margin-bottom: 1rem;
  }

  a, 
  li {
    text-decoration: none;
  }
`
