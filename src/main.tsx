import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// @ts-expect-error store.js does not have a declaration file.
import store from "./store.js";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import SurahDetail from "./features/components/surahDetail/SurahDetail.js";
import Surahs from "./features/pages/surahs-page/surahs.js";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="/surahs"  element={<Surahs/>} />
            <Route path="SurahDetail" element={<SurahDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);







