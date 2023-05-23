import React, { useState } from "react";
import GlobalStyle from "./styles/globalStyle";
import Home from "./pages/home";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
