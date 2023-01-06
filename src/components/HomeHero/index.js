import {
  Heading,
  Text,
  Button,
  Stack,
  Box,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "react-scroll";

export default function HomeHero() {
  const dark = useColorModeValue("gray.800", "white");
  const grey = useColorModeValue("gray.600", "gray.400");
  const buttonBg = useColorModeValue("pink.500", "gray.800");
  const buttonText = useColorModeValue("white", "pink.400");
  const buttonBorder = useColorModeValue("pink.500", "pink.400");

  return (
    <Box as={Container} maxW="full" my={{ base: 4, md: 12, lg: 16 }}>
      <Stack textAlign={"left"} spacing={{ base: 8, md: 10 }}>
        <Text
          fontWeight={400}
          fontSize={{ base: "xl", lg: "2xl" }}
          lineHeight={"110%"}
          color={dark}
        >
          Hi, my name is
        </Text>
        <Heading
          color={dark}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Appoline Cogan.
          <br />
          <Text as={"span"} color={"pink"}>
            I am a Full-Stack Developer.
          </Text>
        </Heading>
        <Text color={grey} fontSize={"lg"} maxW={"2xl"}>
          I'm a well-organised, problem solver and independent developer from
          Melbourne, Australia.
          Interested in the entire full-stack spectrum and working on creative projects with positive people.
        </Text>
        <Button
          fontSize={"lg"}
          fontWeight={500}
          as={Link}
          to={"contact"}
          smooth={true}
          transition={1000}
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
          Contact me!
        </Button>
      </Stack>
    </Box>
  );
}
