import {
  Heading,
  Text,
  Button,
  Stack,
  Box,
  Container,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function HomeHero() {
  const dark = useColorModeValue("gray.800", "white");
  const grey = useColorModeValue("gray.600", "gray.400");
  const buttonBg = useColorModeValue("pink.400", "gray.800");
  const button = useColorModeValue("white", "pink.400");

  return (
    <Box as={Container} maxW="full" my={{ base: 4, md: 12, lg: 16 }}>
      <Stack textAlign={"left"} spacing={{ base: 6, md: 8 }}>
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
            I am a Web Developer.
          </Text>
        </Heading>
        <Text color={grey} fontSize={"lg"}>
          I am a Full-Stack Developer from Melbourne, Australia. <br />
          Well-organised person, problem solver and independent with high
          attention to detail.
        </Text>
        <Button
          as={Link}
          href={"#contact"}
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
          Contact me!
        </Button>
      </Stack>
    </Box>
  );
}
