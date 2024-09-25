import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  	* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }

    /* SCROLL BAR */
    ::-webkit-scrollbar {
        width: 8px;
        
    }
    ::-webkit-scrollbar-thumb {
        background: ${ ({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
    }

    body{
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.WHITE};
    
      -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea{
      font-family: "Roboto Slab", serif;
      font-size: 16px;
      outline: none;
    }

    a{
      text-decoration: none;
    }

    button, a{
      cursor: pointer;
      transition: filter 0.2s;
    }

    button:hover, a:hover{
      filter: brightness(0.9);
    }
`