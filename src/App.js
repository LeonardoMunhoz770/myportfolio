import React from "react";
import { ThemeProvider } from "styled-components";

import Home from "./pages/home";

import GlobalStyle from "./styles/reset";
import { darkTheme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
