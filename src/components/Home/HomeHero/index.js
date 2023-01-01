import {
  Heading,
  Text,
  Button,
  Stack,
  Box,
  Container,
  Link,
} from "@chakra-ui/react";

export default function HomeHero() {
  return (
    <Box as={Container} maxW="full" p={4}>
      <Stack
        textAlign={"left"}
        spacing={{ base: 6, md: 8 }}
        py={{ base: 20, md: 24 }}
      >
        <Text
          fontWeight={400}
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          lineHeight={"110%"}
        >
          Hi, my name is
        </Text>
        <Heading
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
        <Text color={"gray.500"}>
          I am a Full-Stack Developer from Melbourne, Australia. Well-organised
          person, problem solver and independent with high attention to detail.
        </Text>
        <Button
          as={Link}
          href={"#contact"}
          maxW={40}
          colorScheme={"pink"}
          bg={"pink.400"}
          rounded={"full"}
          px={6}
          _hover={{
            bg: "pink.400",
          }}
        >
          Contact me!
        </Button>
      </Stack>
    </Box>
  );
}
