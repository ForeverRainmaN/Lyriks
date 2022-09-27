import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Song } from "./types";

// @ts-ignore

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1/",
    prepareHeaders: (headers, api) => {
      headers.set(
        "X-RapidAPI-Key",
        "71a2c2637emsh37b2cfbdee0f783p156b67jsnc95151c61e69",
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<Song[], void>({
      query: () => "/charts/world",
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
