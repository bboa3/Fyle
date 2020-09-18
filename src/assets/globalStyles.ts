import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: var(--pale-blue);
  }

  body {
    height: 100vh;
    width: 100vw;

    font-size: 1.4rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }
 
  :root {
    --primary: linear-gradient(to right, hsl(6, 100%, 80%), hsl(335, 100%, 65%));
    --pale-blue: hsl(243, 100%, 93%);
    --grayish-blue: hsl(229, 7%, 55%);
    --dark-blue: hsl(228, 56%, 26%);
    --very-dark-blue: hsl(229, 57%, 11%);


    font-size: 60%;
  }

  @media (min-width: 700px){
    :root {
      font-size: 62.5%;
    }
  }
`;