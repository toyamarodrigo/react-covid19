import React from "react";
import { GridItem, Skeleton } from "@chakra-ui/react";

console.log("pre-render SkeletonCard");

export const SkeletonCard = () => {
  console.log("render SkeletonCard");

  return (
    <GridItem>
      <Skeleton boxShadow="md" minH="150px" minW="280px" px={8} py={4} />;
    </GridItem>
  );
};
