import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}


html {
    font-family: 'Palette Mosaic', cursive;
    display: flex;
    justify-content: center;
  };
  
  body {
    background-color: aqua;
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: relative;
  }
  
  page {
    height: 100vh;
  };
  
  header {
    background-color: blueviolet;
    grid-row: 1 / 2;
    box-shadow: 0px 5px 10px black;
    z-index: 10;
  }

  main {
  background-color: palevioletred;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}  
  
  footer {
    background-color: rgb(126, 112, 218);
    grid-row: 3 / 4;
    position: sticky;
    bottom: 0;
    z-index: 30;
    box-shadow: 0px 5px 10px black;
  }
  
  button {
    font-family: 'Palette Mosaic', cursive;
  }
  
  h1 {
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
  }
  

  
  svg {
    width: 50px;
  }
  
  button {
    max-width: 15rem;
    margin: 1rem;
    padding: 0.25rem 1rem;
    align-self: center;
  }
  
  a {
    text-decoration: none;
  }
`;
