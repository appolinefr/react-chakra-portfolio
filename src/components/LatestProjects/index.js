import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  Divider,
  Button,
  Collapse,
} from "@chakra-ui/react";

import { useMediaQuery, useDisclosure } from "@chakra-ui/react";

import Abortion from "../Projects/AbortionSavesLives";
import Dictionary from "../Projects/ReactDictionnary";
import Weather from "../Projects/Weather";
import OtherProjects from "../Projects/OtherProjects";

export default function Projects() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1441px)");
  const { isOpen, onToggle } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box
      as={Container}
      maxW="full"
      p={isLargerThan1280 ? 8 : 4}
      my={{ base: 4, md: 12, lg: 16 }}
    >
      <Flex alignItems={"center"}>
        <Heading
          id={"projects"}
          fontWeight={600}
          lineHeight={"110%"}
          py={{ base: 8, md: 12 }}
        >
          Latest projects
        </Heading>
        <Divider
          width={{ sm: "150px", md: "300px", lg: "400px" }}
          orientation="horizontal"
          borderColor={"pink"}
          ml={8}
        />
      </Flex>
      <Abortion />
      <Dictionary />
      <Weather />
        <Collapse in={show}>
          <OtherProjects />
        </Collapse>
        <Button
          size="md"
          onClick={handleToggle}
          maxW={40}
          color={"pink.400"}
          bg={"white"}
          borderRadius="sm"
          border={"solid"}
          borderColor={"pink.400"}
          p={6}
          _hover={{
            bg: "pink.400",
            color: "white",
          }}
        >
          Show {show ? "Less" : "More"}
        </Button>
    </Box>
  );
}
