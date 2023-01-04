import {
  SimpleGrid,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  Stack,
  List,
  ListItem,
} from "@chakra-ui/react";

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
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      spacing={{ sm: 8, md: 20 }}
      my={{ base: 8, md: 12, lg: 16 }}
    >
      <Flex>
        <Image
          border={"solid"}
          alt={""}
          src={dictionary.image}
          objectFit={"cover"}
          width={607}
          aspect-ratio={607 / 304}
          height={304}
          borderRadius={"md"}
        />
      </Flex>
      <Stack spacing={4} justifyContent={"center"} backgroundColor={"gray.50"}>
        <Heading>{dictionary.name}</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          {dictionary.description}
        </Text>
        <List>
          <ListItem>{dictionary.tech}</ListItem>
        </List>
      </Stack>
    </SimpleGrid>
  );
}
