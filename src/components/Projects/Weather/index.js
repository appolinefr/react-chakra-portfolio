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

import Abortion from "../../../images/abortion.png";

const asl = {
  name: "Abortion saves lives",
  description:
    "The abortion saves lives app will allow South Australian people to look for abortion providers in their state and to give testimonials about their experience to help others make the decision on where to have their procedure.",
  link: "https://abortion-saves-lives.herokuapp.com/",
  image: Abortion,
  tech: [
    "React ",
    " Chakra UI ",
    " Node.js ",
    " Express ",
    " MongoDB ",
    " Mongoose ",
  ],
};

export default function AbortionProject() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      spacing={20}
      mb={{ base: 8, md: 12, lg: 16 }}
    >
      <Stack spacing={4} justifyContent={"center"} backgroundColor={"gray.50"}>
        <Heading> {asl.name}</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          {asl.description}
        </Text>
        <List>
          <ListItem>{asl.tech}</ListItem>
        </List>
      </Stack>
      <Flex>
        <Image
          border={"solid"}
          alt={""}
          src={asl.image}
          objectFit={"cover"}
          width={607}
          aspect-ratio={607 / 304}
          height={304}
          borderRadius={"md"}
        />
      </Flex>
    </SimpleGrid>
  );
}
