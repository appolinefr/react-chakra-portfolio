import {
  SimpleGrid,
  Box,
  Text,
  Flex,
  Heading,
  Stack,
  Link,
  IconButton,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";

import { BiLinkExternal } from "react-icons/bi";
import { BsGithub, BsFolder } from "react-icons/bs";

const projects = [
  {
    name: "Marvel Mystery Matcher",
    description:
      "Your personality may meld with many superheroes out there in the Marvel universe. This mystery matcher quiz will match you with the Marvel superhero that best suits your personality.",
    link: "https://rfox01.github.io/Group-4-Project-1/index.html",
    github: "https://github.com/RFox01/Group-4-Project-1",
    tech: ["JS", "Bulma", "Wikipedia API", "HTML", "CSS"],
  },
  {
    name: "Employee Tracker",
    description:
      "The employee tracker is a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
    link: "https://github.com/appolinefr/Employee-tracker",
    github: "https://github.com/appolinefr/Employee-tracker",
    tech: ["JS", "Node", "MySQL"],
  },
  {
    name: "Social-network API",
    description:
      "A API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    link: "https://github.com/appolinefr/Social-network-API",
    github: "https://github.com/appolinefr/Social-network-API",
    tech: ["Express", "MongoDB", "Mongoose", "Node"],
  },
  {
    name: "Merchant Game",
    description:
      "The Merchant Game is a medieval themed trading game where players can travel around a world map via icons on a map image to buy and sell goods at different locations on the map..",
    link: "https://github.com/Wombattree/MerchantGame",
    github: "https://github.com/Wombattree/MerchantGame",
    tech: ["Handlebars", "Node", "Express", "Sequelize", "MySQL", "Heroku"],
  },
];

export default function OtherProjects() {
  const dark = useColorModeValue("gray.800", "white");
  const list = useColorModeValue("pink.500", "white");
  const pink = useColorModeValue("pink.500", "pink.400");
  const button = useColorModeValue("gray.800", "white");
  const grey = useColorModeValue("gray.600", "gray.300");
  const boxBg = useColorModeValue("white", "gray.700");

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2, xl: 3 }}
      spacing={{ sm: 4, md: 6 }}
      my={{ base: 8 }}
    >
      {projects.map((project, index) => (
        <Box
          _hover={{
            transform: "translateY(-7px)",
            transition: " all 0.2s ease-in-out",
          }}
          backgroundColor={boxBg}
          boxShadow="xl"
          key={index}
          h={"100%"}
        >
          <Stack spacing={4} justifyContent={"center"} p={5} borderRadius="4px">
            <Flex justify={"flex-end"} color={pink} align={"center"}>
              <BsFolder size="34px" />
              <Link href={project.link} ml={"auto"} target="_blank">
                <IconButton
                  color={button}
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  fontSize="xl"
                  icon={<BsGithub />}
                  _hover={{
                    color: pink,
                  }}
                  _active={{ color: pink }}
                  isRound
                />
              </Link>
              <Link href={project.link} target="_blank">
                <IconButton
                  color={button}
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  fontSize="2xl"
                  icon={<BiLinkExternal />}
                  _hover={{
                    color: pink,
                  }}
                  _active={{ color: pink }}
                  isRound
                />
              </Link>
            </Flex>
            <Heading color={dark} size={"md"}>
              {project.name}
            </Heading>
            <Text color={grey}>{project.description}</Text>
            <List>
              {project.tech.map((type, index) => (
                <ListItem
                  key={index}
                  fontSize={"sm"}
                  color={list}
                  display={"inline-block"}
                  px={1}
                >
                  {type}
                </ListItem>
              ))}
            </List>
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  );
}
