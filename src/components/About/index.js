import {
  Container,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Heading,
  Text,
  Stack,
  Flex,
  Image,
  Box,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

import { RxTriangleRight } from "react-icons/rx";

import Appoline from "../../images/appo.jpeg";

const frontEnd = ["JavaScript (ES6+)", "React", "Chakra UI", "Gatsby"];
const backEnd = ["Node.js", "Express", "SQL", "MongoDB"];

export default function AboutAuthor() {
  const dark = useColorModeValue("gray.800", "white");
  const grey = useColorModeValue("gray.600", "gray.400");
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
          id={"about"}
          color={dark}
          fontWeight={600}
          lineHeight={"110%"}
          py={{ base: 8, md: 12 }}
        >
          About Me
        </Heading>
        <Divider
          width={{ sm: "150px", md: "300px", lg: "400px" }}
          orientation="horizontal"
          borderColor={"pink"}
          ml={8}
        />
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
        <Stack spacing={4}>
          <Text color={grey} fontSize={"lg"}>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </Text>
          <Text color={grey} fontSize={"lg"}>
            Here are a few technologies I have been working with recently:
          </Text>
          <SimpleGrid columns={{ base: 2, md: 2 }} spacing={1}>
            <List color={grey} fontSize={"md"}>
              {frontEnd.map((tech, index) => (
                <ListItem key={index}>
                  <ListIcon as={RxTriangleRight} color={"pink.600"} />
                  {tech}
                </ListItem>
              ))}
            </List>
            <List color={grey} fontSize={"md"}>
              {backEnd.map((tech, index) => (
                <ListItem key={index}>
                  <ListIcon as={RxTriangleRight} color={"pink.600"} />
                  {tech}
                </ListItem>
              ))}
            </List>
          </SimpleGrid>
        </Stack>
        <Flex justifyContent={"center"}>
          <Image
            alt={"Appoline Cogan"}
            src={Appoline}
            objectFit={"cover"}
            width={300}
            aspect-ratio={300 / 300}
            height={300}
            borderRadius={"full"}
            _hover={{
              boxShadow: "0px 5px 40px rgba(236, 99, 166)",
            }}
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
