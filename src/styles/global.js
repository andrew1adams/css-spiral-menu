import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;

    --gradient: linear-gradient(45deg, #333, #555);
    --gradient-sec: linear-gradient(45deg, #fff, #ddd);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: var(--gradient);

    ul li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    svg {
      cursor: pointer;
      /* color: transparent;
      fill: transparent; */
      background: var(--gradient-sec);
      padding: 15px;
      border-radius: 50%;
    }
  }
`

export default GlobalStyles