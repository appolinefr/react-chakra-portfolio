import React from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  Divider,
  Button,
  Collapse,
  useColorModeValue,
} from "@chakra-ui/react";

import { useMediaQuery } from "@chakra-ui/react";

import Abortion from "../AbortionSavesLives";
import Dictionary from "../ReactDictionnary";
import Weather from "../Weather";
import OtherProjects from "../OtherProjects";

export default function Projects() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1441px)");
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const buttonBg = useColorModeValue("pink.500", "gray.800");
  const buttonText = useColorModeValue("white", "pink.400");
  const buttonBorder = useColorModeValue("pink.500", "pink.400");

  return (
    <Box as={Container} maxW="full" p={isLargerThan1280 ? 8 : 4}>
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
      <Flex justify={"center"}>
        <Button
          fontSize={"lg"}
          fontWeight={500}
          onClick={handleToggle}
          maxW={40}
          color={buttonText}
          bg={buttonBg}
          borderRadius="md"
          border={"solid"}
          borderColor={buttonBorder}
          p={6}
          _hover={{
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: `0px 1px 12px rgba(236, 99, 166)`,
          }}
          _active={{
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: `0px 1px 12px rgba(236, 99, 166)`,
          }}
        >
          Show {show ? "Less" : "More"}
        </Button>
      </Flex>
    </Box>
  );
}
