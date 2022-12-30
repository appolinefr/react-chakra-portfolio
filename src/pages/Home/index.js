import { Box, Stack, VStack, Divider } from "@chakra-ui/react";

import Socials from "../../components/Home/Socials";
import HomeHero from "../../components/Home/HomeHero";
import Projects from "../../components/Home/LatestProjects";
import ContactForm from "../../components/Contact";

export default function Home() {
  return (
    <Box py={{ base: 5, lg: 6 }} px={{ base: 5, lg: 20 }}>
      <Stack
        spacing={{ base: 4, md: 24, lg: 36 }}
        direction={{ base: "column", md: "row" }}
      >
        <Socials />
        <VStack spacing={{ base: 2, md: 4, lg: 4 }}>
          <HomeHero />
          <Divider />
          <Projects />
          <ContactForm />
        </VStack>
      </Stack>
    </Box>
  );
}
