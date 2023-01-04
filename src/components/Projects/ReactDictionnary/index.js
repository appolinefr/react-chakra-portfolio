import {
  SimpleGrid,
  Text,
  Image,
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
  tech: [" React ", " Chakra UI ", " API "],
};

export default function ReactDictionary() {
  const dark = useColorModeValue("gray.800", "white");
  const grey = useColorModeValue("gray.600", "gray.400");
  const button = useColorModeValue("white", "pink.500");
  const boxBg = useColorModeValue("white", "whiteAlpha.200");

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      spacing={{ sm: 4, md: 8, lg: 16 }}
      my={{ base: 4, md: 12, lg: 16 }}
    >
      <Flex>
        <Image
          display={{ sm: "none", md: "block" }}
          alt={dictionary.name}
          src={dictionary.image}
          objectFit={"cover"}
          width={607}
          aspect-ratio={607 / 304}
          height={304}
          borderRadius={"md"}
        />
      </Flex>
      <Stack
        spacing={4}
        justifyContent={"center"}
        backgroundColor={boxBg}
        p={5}
        borderRadius="4px"
        boxShadow="xl"
      >
        <Text color={"pink.500"} fontSize={"lg"}>
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
              }}
              isRound
            />
          </Link>
        </Flex>
      </Stack>
    </SimpleGrid>
  );
}
