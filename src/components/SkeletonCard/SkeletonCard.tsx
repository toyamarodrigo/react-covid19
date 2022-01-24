import React from "react";
import { GridItem, Skeleton } from "@chakra-ui/react";

export const SkeletonCard = () => {
  return (
    <GridItem>
      <Skeleton boxShadow="md" minH="150px" minW="280px" px={8} py={4} />;
    </GridItem>
  );
};
