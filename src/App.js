import { useState } from "react";
import { useIntl } from "react-intl";

function App() {
  const intl = useIntl();

  const [locale, setLocale] = useState(localStorage.getItem("locale") ?? "ko");

  return (
    <div className="App">
      <p>{intl.formatMessage({ id: "apple" })}</p>
      <p>{intl.formatMessage({ id: "banana" })}</p>
      <p>{intl.formatMessage({ id: "coconut" })}</p>

      <select
        value={locale}
        onChange={(e) => {
          setLocale(e.target.value);
          localStorage.setItem("locale", e.target.value);
          window.location.reload();
        }}
      >
        <option value="ko">{intl.formatMessage({ id: "ko" })}</option>
        <option value="en-US">{intl.formatMessage({ id: "en" })}</option>
        <option value="fr-FR">{intl.formatMessage({ id: "fr" })}</option>
      </select>
    </div>
  );
}

export default App;
