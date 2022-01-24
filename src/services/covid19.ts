import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { CountryTotalStatus, CovidSummary, WorldWip } from "../model/covid";

export const covidApi = createApi({
  reducerPath: "covidApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL_API}` }),
  endpoints: (builder) => ({
    getAllCovidSummary: builder.query<CovidSummary, void>({
      query: () => `/summary`,
    }),
    getTotalAllStatusByCountry: builder.query<CountryTotalStatus[], string>({
      query: (country) => `/total/country/${country}`,
    }),
    getWorldWip: builder.query<WorldWip, void>({
      query: () => `/world/total`,
    }),
  }),
});

export const {
  useGetAllCovidSummaryQuery,
  useGetTotalAllStatusByCountryQuery,
  useGetWorldWipQuery,
} = covidApi;
