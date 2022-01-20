import React, { useEffect, useMemo } from "react";
import { Skeleton } from "@chakra-ui/react";
import Select, { SingleValue } from "react-select";

import { useGetAllCovidSummaryQuery } from "../../services/covid19";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectedCountry } from "../../features/appSlice";
import { CountryOption } from "../../model/covid";
console.log("pre-render InputSelect");

export const InputSelect = () => {
  const { data, isLoading, isSuccess } = useGetAllCovidSummaryQuery();
  const countrySelected = useAppSelector((state) => state.app.selectedCountry);
  const dispatch = useAppDispatch();

  console.log("render InputSelect");

  const countriesOptions: any[] = useMemo(() => {
    return [
      { label: "Global", value: data?.Global, slug: "global" },
      data?.Countries.map((country) => ({
        label: country.Country,
        value: country,
        slug: country.Slug,
      })),
    ].flat();
  }, [data?.Countries, data?.Global]);

  const handleCountryChange = (country: SingleValue<CountryOption>) => {
    if (!country) return dispatch(selectedCountry(countriesOptions[0]));

    dispatch(selectedCountry(country));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(selectedCountry(countriesOptions[0]));
    }
  }, [isSuccess, countriesOptions]);

  if (isLoading) return <Skeleton h="36px" w="200px" />;

  return (
    <Select
      isClearable
      isSearchable
      defaultValue={countriesOptions[0]}
      name="country"
      options={countriesOptions}
      styles={{
        control: (provided) => ({
          ...provided,
          width: "200px",
        }),
      }}
      value={countrySelected}
      onChange={(event) => handleCountryChange(event)}
    />
  );
};
