import { Box, Stack, VStack} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

import Socials from "../../components/Socials";
import HomeHero from "../../components/HomeHero";
import Projects from "../../components/LatestProjects";
import ContactForm from "../../components/Contact";
import About from "../../components/About";
import Footer from "../../components/Footer";

export default function Home() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1441px)");
  return (
    <Box 
      py={isLargerThan1280 ? 10 : { base: 5, lg: 6 }}
      px={isLargerThan1280 ? 28 : { base: 5, lg: 20 }}
      mx={isLargerThan1280 ? 28 : 0}
    >
      <Stack
        spacing={isLargerThan1280 ? 56 : { base: 4, md: 24, lg: 36 }}
        direction={{ base: "column", md: "row" }}
      >
        <Socials />
        <VStack spacing={{ base: 20, lg: 24}}>
          <HomeHero />
          <About/>
          <Projects />
          <ContactForm />
          <Footer/>
        </VStack>
      </Stack>
    </Box>
  );
}
