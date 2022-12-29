import React from "react";
import {
  Box,
  Heading,
  Divider,
  Text,
  Button,
  Stack,
  Flex,
  IconButton,
  Link,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export default function Home() {
  return (
    <>
      <Flex>
        <Box  p={{ base: 5, lg: 6 }}>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Stack
              spacing={{ base: 4, md: 16, lg: 36 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="end"
                spacing={5}
                direction={{ base: "row", md: "column" }}
                display={{ base: "none", md: "flex" }}
              >
                <IconButton
                  aria-label="email"
                  variant="ghost"
                  size="lg"
                  fontSize="2xl"
                  icon={<MdEmail />}
                  _hover={{
                    bg: "blue.500",
                    color: useColorModeValue("white", "gray.700"),
                  }}
                  isRound
                />
                <Link href="#">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="2xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
                <Link href="#">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="20px" />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
                <Divider
                  orientation="vertical"
                  h="200px"
                  borderColor={"pink"}
                />
              </Stack>
              <Stack
                textAlign={"left"}
                spacing={{ base: 6, md: 8 }}
                py={{ base: 20, md: 28 }}
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
                  I am a Full-Stack Developer from Melbourne, Australia.
                  Well-organised person, problem solver and independent with
                  high attention to detail.
                </Text>
                <Button
                  maxW={40}
                  colorScheme={"pink"}
                  bg={"pink.400"}
                  rounded={"full"}
                  px={6}
                  _hover={{
                    bg: "pink.500",
                  }}
                >
                  Contact me!
                </Button>
              </Stack>
            </Stack>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}
