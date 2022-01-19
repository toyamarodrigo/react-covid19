import React from "react";
import { Stack } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

console.log("pre-render BasicLayout");

export const BasicLayout = (props: Props) => {
  console.log("render BasicLayout");

  return (
    <Stack bgColor="whitesmoke" minW="100vw">
      <Stack alignItems="center" h="100%" justifyContent="center" minH="100vh">
        {props.children}
      </Stack>
    </Stack>
  );
};
