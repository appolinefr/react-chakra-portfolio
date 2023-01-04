import {
  SimpleGrid,
  Box,
  Text,
  Flex,
  IconButton,
  Heading,
  Stack,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "Marvel Mystery Matcher",
    description:
      "Your personality may meld with many superheroes out there in the Marvel universe. This mystery matcher quiz will match you with the Marvel superhero that best suits your personality.",
    link: "https://rfox01.github.io/Group-4-Project-1/index.html",
    tech: [" JS ", " Bulma ", " Wikipedia API ", " HTML "],
  },
  {
    name: "Merchant Game",
    description:
      "The Merchant Game is a medieval themed trading game where players can travel around a world map via icons on a map image to buy and sell goods at different locations on the map..",
    link: "https://rfox01.github.io/Group-4-Project-1/index.html",
  },
  {
    name: "Work Day Scheduler",
    description:
      "  Simple calendar application that allows a user to save events for each hour of the day. This app is running in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
    link: "https://github.com/appolinefr/Work-Day-Scheduler",
  },
  {
    name: "Note Taker",
    description:
      "This Heroku deployed application called Note Taker can be used to write and save notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.",
    link: "https://github.com/appolinefr/Note-Taker",
  },
  {
    name: "Weather Dashboard",
    description:
      "This weather dashboard runs in the browser and feature dynamically updated HTML and CSS. It uses OpenWeather One Call API to retrieve weather data for cities and store persistent data to localStorage.",
    link: "https://github.com/appolinefr/Weather-Dashboard",
  },
  {
    name: "Code Quiz",
    description:
      "A timed coding quiz with multiple-choice questions. This app with a clean and responsive user interface runs in the browser and features dynamically updated HTML and CSS powered by JS code.",
    link: "https://github.com/appolinefr/Code-quiz",
  },
];

export default function OtherProjects() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={{ sm: 4, md: 8 }}
      my={{ base: 8 }}
    >
      {projects.map((project) => (
        <Box>
          <Stack>
            <Flex justify={"space-between"}>
              <Link href={project.link} target="_blank">
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  fontSize="xl"
                  icon={<BsGithub />}
                  _hover={{}}
                  isRound
                />
              </Link>
              <Link href={project.link} target="_blank">
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  fontSize="xl"
                  icon={<ExternalLinkIcon />}
                  _hover={{}}
                  isRound
                />
              </Link>
            </Flex>
            <Heading size={"md"}>{project.name}</Heading>
            <Text>{project.description}</Text>
            <List>
              <ListItem color={"pink.500"}>{project.tech}</ListItem>
            </List>
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  );
}