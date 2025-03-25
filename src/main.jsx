
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider> {/* ✅ Dil burada sarmalanmalı */}
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
