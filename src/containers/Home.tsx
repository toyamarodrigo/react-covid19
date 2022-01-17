import React from "react";

import { useGetAllCovidSummaryQuery } from "../services/covid19";

export const Home = () => {
  const { data, isLoading } = useGetAllCovidSummaryQuery();

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
