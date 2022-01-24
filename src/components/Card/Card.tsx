import React, { useMemo } from "react";
import { GridItem, Text } from "@chakra-ui/react";
import CountUp from "react-countup";

import { CardType } from "../../model/covid";

interface Props {
  title: string;
  newData: number;
  totalData: number;
}

export const Card = (props: Props) => {
  const { title, newData, totalData } = props;

  const bgColor = useMemo(() => {
    if (title === CardType.INFECTED) return "red.600";
    if (title === CardType.RECOVERED) return "green.600";
    if (title === CardType.DEATHS) return "gray.700";

    return "gray.200";
  }, [title]);

  return (
    <GridItem
      bgColor={bgColor}
      borderRadius="10px"
      boxShadow="md"
      minH="150px"
      minW="280px"
      px={8}
      py={4}
    >
      <Text color="whiteAlpha.700" fontSize="xl">
        {title}
      </Text>
      <Text color="whitesmoke" fontSize="3xl">
        <CountUp duration={2.5} end={totalData} separator="," start={0} />
      </Text>
      <Text color="whitesmoke">
        Today:
        <CountUp
          duration={2.5}
          end={newData}
          prefix=" +"
          separator=","
          start={0}
          style={{ color: "#74df54" }}
        />
      </Text>
    </GridItem>
  );
};
