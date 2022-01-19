import React, { useMemo } from "react";
import { GridItem, Text } from "@chakra-ui/react";

import { CardType } from "../../model/covid";

console.log("pre-render Card");

interface Props {
  title: string;
  newData: number | undefined;
  totalData: number | undefined;
}

export const Card = (props: Props) => {
  console.log("render Card");
  const { title, newData, totalData } = props;

  const bgColor = useMemo(() => {
    if (title === CardType.INFECTED) return "yellow.500";
    if (title === CardType.RECOVERED) return "green.500";
    if (title === CardType.DEATHS) return "red.500";

    return "gray.200";
  }, [title]);

  return (
    <GridItem bgColor={bgColor} boxShadow="md" minH="150px" minW="280px" px={8} py={4}>
      <Text>{title}</Text>
      <Text>{newData}</Text>
      <Text>{totalData}</Text>
    </GridItem>
  );
};
