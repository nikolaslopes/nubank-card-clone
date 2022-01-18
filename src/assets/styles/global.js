import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 18px;
    color: #fff;
  }
`;
