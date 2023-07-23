import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./components/theme";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
}
