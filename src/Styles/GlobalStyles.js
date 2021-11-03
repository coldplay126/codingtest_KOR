import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  background-color:#1e1f4a;
  
  width: 100%;
  height: 100%;
}
`;

export const StyleButton = styled.button`
  width: 140px;
  height: 45px;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  outline: none;
`;

export default GlobalStyle;
