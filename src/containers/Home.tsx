import React from "react";
import { Heading, Stack } from "@chakra-ui/react";

import { BasicLayout } from "../layout";
import { CardList, InputSelect } from "../components";

console.log("pre-render Home");

export const Home = () => {
  console.log("render Home");

  return (
    <BasicLayout>
      <Stack alignItems="center" justifyContent="center" spacing={16}>
        <Heading as="h1">React COVID-19</Heading>
        <InputSelect />
        <CardList />
      </Stack>
    </BasicLayout>
  );
};
