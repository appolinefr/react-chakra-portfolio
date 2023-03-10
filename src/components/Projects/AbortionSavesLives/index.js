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
  github: "",
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
  const grey = useColorModeValue("gray.600", "gray.300");
  const boxBg = useColorModeValue("white", "gray.700");
  const pink = useColorModeValue("pink.500", "pink.400");

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      spacing={{ sm: 4, md: 8, lg: 16 }}
      mb={{ base: -4, md: 12, lg: 16 }}
    >
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
                  bg: boxBg,
                }}
                _active={{
                  color: "pink.500",
                  bg: boxBg,
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
      <Box as={Link} href={asl.link}>
        <Image
          opacity={0.7}
          display={{ sm: "none", md: "block" }}
          ml={{ md: -100, lg: -100, xl: -160 }}
          alt={asl.name}
          src={asl.image}
          width={707}
          aspect-ratio={707 / 404}
          height={404}
          borderRadius={"md"}
          _hover={{
            transform: "translateX(50px)",
            transition: " all 1s ease-in-out",
            opacity: 1,
            cursor: "pointer",
          }}
        />
      </Box>
    </SimpleGrid>
  );
}
