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

import { RxTriangleRight } from "react-icons/rx";

import Appoline from "../../images/appo.jpeg";

const frontEnd = ["JavaScript (ES6+)", "React", "Chakra UI", "Gatsby"];
const backEnd = ["Node.js", "Express", "Heroku", "MongoDB"];

export default function AboutAuthor() {
  const dark = useColorModeValue("gray.800", "white");
  const grey = useColorModeValue("gray.600", "gray.400");
  const lightPink = useColorModeValue("pink.500", "pink");

  return (
    <Box
      as={Container}
      maxW="full"
      my={{ base: 4, md: 12, lg: 16 }}
    >
      <Flex alignItems={"center"}>
        <Heading
          id={"about"}
          className="element"
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
          borderColor={lightPink}
          ml={8}
        />
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
        <Stack spacing={4}>
          <Text color={grey} fontSize={"lg"}>
            Hi, my name is Appoline and I enjoy creating things that live on the
            internet! My interest in web development started in 2020 when I was
            managing full-stack development Bootcamps. Interacting with students
            and instructors that were passionate about all things programming
            sparked my curiosity! I embarked on my coding journey and completed
            the University of Adelaide/edX full-stack development Bootcamp in
            December 2021.
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
              opacity: 1,
            }}
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
