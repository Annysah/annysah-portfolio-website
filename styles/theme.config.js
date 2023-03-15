import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  //body: "linear-gradient(15deg, #eeeeee, #faf8f9, #ffffff)",
  body: "#fff",
  fontColor: "#000000",
  navFontColor: "#fff",
  navBodyColor: "#000",
};

export const darkTheme = {
  //body: "#232323",
  body: "#1c1c1e",
  fontColor: "#ffffff",
  cardBody: "#111",
  navFontColor: "#000",
  navBodyColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`

* {
   box-sizing: border-box;
}

html {
   scroll-behavior: smooth;
}

body {
   margin: 0;
   padding: 0;
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.fontColor};
   //font-family: 'Space Grotesk', sans-serif; 
   font-family: 'Nunito', sans-serif;
   font-weight: 400;
   font-style: normal;
   transition: all 0.50s linear;
   width: 100%;
   height: 100vh;
   //overflow: hidden;
}

input, textarea, button {
   font-family: inherit
}
`;
