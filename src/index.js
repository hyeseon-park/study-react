import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IntlProvider } from "react-intl";

import koMsg from "./lang/ko.json";
import enMsg from "./lang/en.json";
import frMsg from "./lang/fr.json";

const root = ReactDOM.createRoot(document.getElementById("root"));

const locale = localStorage.getItem("locale") ?? "ko";
const messages = { ko: koMsg, "en-US": enMsg, "fr-FR": frMsg }[locale];

root.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>
);
