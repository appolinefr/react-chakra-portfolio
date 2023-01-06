import {
  SimpleGrid,
  Text,
  Image,
  Box,
  Flex,
  Heading,
  Stack,
  List,
  ListItem,
  Link,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsGithub } from "react-icons/bs";

import Dictionary from "../../../images/dictionary.png";

const dictionary = {
  name: "React Dictionnary",
  description:
    "The abortion saves lives app will allow South Australian people to look for abortion providers in their state and to give testimonials about their experience to help others make the decision on where to have their procedure.",
  link: "https://boisterous-pie-d58aaf.netlify.app/",
  image: Dictionary,
  github: "",
  tech: [" React ", " Chakra UI ", " API "],
};

export default function ReactDictionary() {
  const dark = useColorModeValue("gray.800", "white");
  const grey = useColorModeValue("gray.600", "gray.300");
  const boxBg = useColorModeValue("white", "gray.700");
  const pink = useColorModeValue("pink.500", "pink.400");

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      spacing={{ sm: 4, md: 8, lg: 16 }}
      my={{ base: 1, md: 12, lg: 16 }}
    >
      <Box as={Link} href={dictionary.link}>
        <Image
          ml={{ md: 20, lg: 160 }}
          opacity={0.7}
          display={{ sm: "none", md: "block" }}
          alt={dictionary.name}
          src={dictionary.image}
          width={707}
          aspect-ratio={707 / 404}
          height={404}
          borderRadius={"md"}
          _hover={{
            transition: " all 1s ease-in-out",
            transform: "translateX(-40px)",
            opacity: 1,
            cursor: "pointer",
          }}
        />
      </Box>
      <Box alignSelf={"center"}>
        <Stack
          position={"relative"}
          zIndex={1}
          spacing={4}
          justifyContent={"center"}
          backgroundColor={boxBg}
          p={5}
          borderRadius="md"
          boxShadow="xl"
        >
          <Text color={pink} fontSize={"lg"}>
            Featured project
          </Text>
          <Heading color={dark} fontSize={"30px"}>
            {dictionary.name}
          </Heading>
          <Text color={grey} fontSize={"lg"}>
            {dictionary.description}
          </Text>
          <List>
            <ListItem color={dark}>{dictionary.tech}</ListItem>
          </List>
          <Flex justify={"flex-start"}>
            <Link href={dictionary.link} target="_blank">
              <IconButton
                color={dark}
                aria-label="github"
                variant="ghost"
                size="lg"
                fontSize="xl"
                icon={<BsGithub />}
                _hover={{
                  color: "pink.500",
                  bg: boxBg,
                }}
                _active={{
                  color: "pink.500",
                  bg: boxBg,
                }}
                isRound
              />
            </Link>
            <Link href={dictionary.link} target="_blank">
              <IconButton
                color={dark}
                aria-label="github"
                variant="ghost"
                size="lg"
                fontSize="xl"
                icon={<ExternalLinkIcon />}
                _hover={{
                  color: "pink.500",
                  bg: boxBg,
                }}
                _active={{
                  color: "pink.500",
                  bg: boxBg,
                }}
                isRound
              />
            </Link>
          </Flex>
        </Stack>
      </Box>
    </SimpleGrid>
  );
}
