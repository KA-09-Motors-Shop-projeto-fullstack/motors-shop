import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyled from "./styles/global";
import theme from "./styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "./providers";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Providers>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <App />
      </ThemeProvider>
    </Providers>
  </BrowserRouter>
);
