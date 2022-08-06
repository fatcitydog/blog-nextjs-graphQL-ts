import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyles, Container } from "../../styles/globalStyles";
import ToggleTheme from "../ToggleTheme";
import { lightTheme, darkTheme } from "../../styles/theme";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props: any) {
  const [isLight, setTheme] = useState<boolean>(true);

  const handlethemeToggle = () => {
    setTheme(!isLight);
  };

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <ToggleTheme toggleTheme={handlethemeToggle} isLight={isLight} />
      <Container>{props.children}</Container>
      <Footer />
    </ThemeProvider>
  );
}
