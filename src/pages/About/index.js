import { Box, Stack, VStack } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

import About from "../../components/About";
import Socials from "../../components/Home/Socials";

export default function AboutPage() {
   const [isLargerThan1280] = useMediaQuery("(min-width: 1440px)");
  return (
    <Box
      py={{ base: 5, lg: 6 }}
      px={isLargerThan1280 ? 28 : { base: 5, lg: 20 }}
      mx={isLargerThan1280 ? 28 : 0}
  >
      <Stack
        spacing={{ base: 4, md: 24, lg: 36 }}
        direction={{ base: "column", md: "row" }}
      >
        <Socials />
        <VStack spacing={{ base: 2, md: 4, lg: 4 }}>
          <About/>
        </VStack>
      </Stack>
    </Box>
  );
}
