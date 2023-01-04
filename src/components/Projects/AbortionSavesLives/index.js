import {
  SimpleGrid,
  Text,
  Image,
  Flex,
  Heading,
  Stack,
  List,
  ListItem,
  useColorModeValue,
  IconButton,
  Link,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsGithub } from "react-icons/bs";

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
  const dark = useColorModeValue("gray.800", "white");
  const grey = useColorModeValue("gray.600", "gray.400");
  const boxBg = useColorModeValue("white", "whiteAlpha.200");

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      spacing={{ sm: 4, md: 8, lg: 16 }}
    >
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
          {asl.name}
        </Heading>
        <Text color={grey} fontSize={"lg"}>
          {asl.description}
        </Text>
        <List>
          <ListItem color={dark}>{asl.tech}</ListItem>
        </List>
        <Flex justify={"flex-start"}>
          <Link href={asl.link} target="_blank">
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
          <Link href={asl.link} target="_blank">
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
      <Flex display={{ sm: "none", md: "block" }}>
        <Image
          alt={asl.name}
          src={asl.image}
          objectFit={"cover"}
          width={607}
          aspect-ratio={607 / 304}
          height={304}
          borderRadius={"md"}
          _hover={{
            transform: "translateX(-7px)",
          }}
        />
      </Flex>
    </SimpleGrid>
  );
}
