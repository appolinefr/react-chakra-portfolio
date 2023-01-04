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
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

import { RxTriangleRight } from "react-icons/rx";

import Appoline from "../../images/appo.jpeg";

export default function AboutAuthor() {
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
          <Text color={"gray.500"} fontSize={"lg"}>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </Text>
          <Text color={"gray.500"} fontSize={"lg"}>
            Here are a few technologies I have been working with recently:
          </Text>
          <SimpleGrid columns={{ base: 2, md: 2 }} spacing={1}>
            <List color={"gray.500"} fontSize={"md"}>
              <ListItem>
                <ListIcon as={RxTriangleRight} />
                JavaScript (ES6+)
              </ListItem>
              <ListItem>
                <ListIcon as={RxTriangleRight} />
                React
              </ListItem>
              <ListItem>
                <ListIcon as={RxTriangleRight} />
                Node.js
              </ListItem>
              <ListItem>
                <ListIcon as={RxTriangleRight} />
                Node.js
              </ListItem>
            </List>
            <List color={"gray.500"} fontSize={"md"}>
              <ListItem>
                <ListIcon as={RxTriangleRight} />
                JavaScript (ES6+)
              </ListItem>
              <ListItem>
                <ListIcon as={RxTriangleRight} />
                React
              </ListItem>
              <ListItem>
                <ListIcon as={RxTriangleRight} />
                Node.js
              </ListItem>
              <ListItem>
                <ListIcon as={RxTriangleRight} />
                Node.js
              </ListItem>
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
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
