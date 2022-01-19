import React from "react";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import { BasicLayout } from "../layout";
import { CardList } from "../components/CardList";

console.log("pre-render Home");

export const Home = () => {
  console.log("render Home");

  return (
    <BasicLayout>
      <Stack alignItems="center" justifyContent="center" spacing={16}>
        <Heading as="h1">React COVID-19</Heading>
        <CardList />
      </Stack>
    </BasicLayout>
  );
};
