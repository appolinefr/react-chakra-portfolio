import { Box, Container, Heading, Flex, Divider } from "@chakra-ui/react";

import { useMediaQuery } from "@chakra-ui/react";

import Abortion from "../Projects/AbortionSavesLives";
import Dictionary from "../Projects/ReactDictionnary";
import Weather from "../Projects/Weather";

export default function Projects() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1441px)");

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
      {/* collapse with options to view more projects */}
    </Box>
  );
}
