import React, { useMemo } from "react";
import { Grid, GridItem, Spinner, Text } from "@chakra-ui/react";

import { useGetAllCovidSummaryQuery } from "../../services/covid19";
import { Card } from "../Card";
import { CardType } from "../../model/covid";
import { useAppSelector } from "../../app/hooks";
import { SkeletonCard } from "../SkeletonCard";

console.log("pre-render CardList");

export const CardList = () => {
  const { isSuccess, isLoading } = useGetAllCovidSummaryQuery();
  const selectedCountry = useAppSelector((state) => state.app.selectedCountry);

  console.log("render CardList");

  return (
    <Grid gap={8} spacing={8} templateColumns="repeat(3, 1fr)">
      {isLoading && (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
      {isSuccess && (
        <>
          <Card
            newData={selectedCountry.value.NewConfirmed}
            title={CardType.INFECTED}
            totalData={selectedCountry.value.TotalConfirmed}
          />
          <Card
            newData={selectedCountry.value.NewRecovered}
            title={CardType.RECOVERED}
            totalData={selectedCountry.value.TotalRecovered}
          />
          <Card
            newData={selectedCountry.value.NewDeaths}
            title={CardType.DEATHS}
            totalData={selectedCountry.value.TotalDeaths}
          />
          <GridItem colStart={2}>
            <Text fontWeight={600} textAlign="center">
              Last update: {selectedCountry.value.Date.substring(0, 10)}
            </Text>
          </GridItem>
        </>
      )}
    </Grid>
  );
};
