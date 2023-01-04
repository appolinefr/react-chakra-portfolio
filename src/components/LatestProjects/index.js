import React from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  Divider,
  Button,
  Collapse,
  useColorModeValue
} from "@chakra-ui/react";

import { useMediaQuery } from "@chakra-ui/react";

import Abortion from "../Projects/AbortionSavesLives";
import Dictionary from "../Projects/ReactDictionnary";
import Weather from "../Projects/Weather";
import OtherProjects from "../Projects/OtherProjects";

export default function Projects() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1441px)");
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  
  const dark = useColorModeValue("gray.800", "white");
  const grey = useColorModeValue("gray.600", "gray.400");
  const buttonBg = useColorModeValue("pink.400", "gray.800");
  const button = useColorModeValue("white", "pink.400");

  return (
    <Box
      as={Container}
      maxW="full"
      p={isLargerThan1280 ? 8 : 4}
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
        color={button}
        bg={buttonBg}
        borderRadius="sm"
        border={"solid"}
        borderColor={"pink.400"}
        p={6}
        _hover={{
          textDecoration: "none",
          boxShadow: "0px 5px 10px rgba(236, 99, 166)",
        }}
      >
        Show {show ? "Less" : "More"}
      </Button>
    </Box>
  );
}
