import React from "react";
import { Box, Heading, Link, Stack } from "@chakra-ui/react";

import { BasicLayout } from "../layout";
import { CardList, InputSelect } from "../components";

export const Home = () => {
  return (
    <BasicLayout>
      <Stack alignItems="center" justifyContent="center" spacing={16}>
        <Heading as="h1">React COVID-19</Heading>
        <InputSelect />
        <CardList />
        <Box>
          Source:{" "}
          <Link href="https://covid19api.com/" target="_blank">
            https://covid19api.com/
          </Link>
        </Box>
      </Stack>
    </BasicLayout>
  );
};
