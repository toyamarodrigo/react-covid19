import React from "react";
import { Stack } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export const BasicLayout = (props: Props) => {
  return (
    <Stack bgColor="whitesmoke" minW="100vw">
      <Stack alignItems="center" h="100%" justifyContent="center" minH="100vh">
        {props.children}
      </Stack>
    </Stack>
  );
};
