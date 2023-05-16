import React from "react";
import GlobalStyle from "./styles/globalStyle";
import Home from "./pages/home";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
