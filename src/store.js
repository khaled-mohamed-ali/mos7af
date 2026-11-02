import { configureStore } from "@reduxjs/toolkit";
import { surahsApi } from "./features/pages/surahs-page/surahsApi";

const store = configureStore({
  reducer: {
    [surahsApi.reducerPath]: surahsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(surahsApi.middleware),
});

export default store;

