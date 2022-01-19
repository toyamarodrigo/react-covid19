import React, { useMemo } from "react";
import { Grid, GridItem, Spinner } from "@chakra-ui/react";

import { useGetAllCovidSummaryQuery } from "../../services/covid19";
import { Card } from "../Card";
import { CardType } from "../../model/covid";

console.log("pre-render CardList");

export const CardList = () => {
  const { data, isSuccess, isLoading } = useGetAllCovidSummaryQuery();

  const globalData = useMemo(() => {
    return data?.Global;
  }, [data?.Global]);

  const countriesData = useMemo(() => {
    return data?.Countries;
  }, [data?.Countries]);

  console.log("globalData :>> ", globalData);
  console.log("countriesData :>> ", countriesData);

  return (
    <Grid gap={8} spacing={8} templateColumns="repeat(3, 1fr)">
      {isLoading && (
        <GridItem colSpan={3}>
          <Spinner />
        </GridItem>
      )}
      {isSuccess && (
        <>
          <Card
            newData={globalData?.NewConfirmed}
            title={CardType.INFECTED}
            totalData={globalData?.TotalConfirmed}
          />
          <Card
            newData={globalData?.NewRecovered}
            title={CardType.RECOVERED}
            totalData={globalData?.TotalRecovered}
          />
          <Card
            newData={globalData?.NewDeaths}
            title={CardType.DEATHS}
            totalData={globalData?.TotalDeaths}
          />
        </>
      )}
    </Grid>
  );
};
