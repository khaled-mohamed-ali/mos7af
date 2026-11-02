
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const surahsApi = createApi({
  reducerPath: "surahsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://ummahapi.com/api/quran",
  }),

  endpoints: (builder) => ({
    getSurahs: builder.query({
      query: () => "/surahs",
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetSurahsQuery } = surahsApi;
