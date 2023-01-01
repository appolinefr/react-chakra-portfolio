import {
  Box,
  SimpleGrid,
  Text,
  HStack,
  Container,
  Image,
  Flex,
  Button,
  Heading,
  Center,
} from "@chakra-ui/react";

import Abortion from "../../../images/abortion.png";
import Dictionary from "../../../images/dictionnary.png";

const projects = [
  {
    name: "Abortion saves lives",
    description:
      "The abortion saves lives app will allow South Australian people to look for abortion providers in their state and to give testimonials about their experience to help others make the decision on where to have their procedure.",
    link: "https://abortion-saves-lives.herokuapp.com/",
    image: Abortion,
  },
  {
    name: "React Dictionnary",
    description: "",
    link: "https://boisterous-pie-d58aaf.netlify.app/",
    image: Dictionary,
  },
];
export default function Projects() {
  return (
    <Box as={Container} maxW="full" p={4}>
      <Flex justify={"space-between"} mb={16}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          lineHeight={"110%"}
        >
          Latest projects
        </Heading>
        <Button
          maxW={40}
          bg={"white"}
          rounded={"full"}
          px={6}
          color={"pink.400"}
          borderColor={"pink.400"}
          border={"solid"}
          _hover={{
            bg: "pink.400",
            color: "white",
          }}
        >
          All projects
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={16}>
        {projects.map((project) => (
          <Center>
            <Box
              maxW={"450px"}
              w={"full"}
              boxShadow={"xl"}
              rounded={"md"}
              overflow={"hidden"}
              backgroundColor={"gray.50"}
            >
              <HStack textAlign={"center"} p={6} align={"center"}>
                <Image
                  alt={""}
                  src={project.image}
                  objectFit={"cover"}
                  width={607}
                  aspect-ratio={607 / 304}
                  height={304}
                />
                <Text
                  fontSize={"lg"}
                  fontWeight={500}
                  p={2}
                  px={3}
                  mb={4}
                  color={"white"}
                  rounded={"full"}
                ></Text>
              </HStack>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </Box>
  );
}
