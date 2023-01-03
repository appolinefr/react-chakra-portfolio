import { Box, Flex, Text} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box>
      <Flex
        minH={"80px"}
        py={{ base: 4 }}
        px={{ base: 6 }}
        align={"center"}
        justify="center"
        // backgroundColor={"#1B2333"}
        // color={"white"}
      ><Text>Designed and Built by Appoline Cogan</Text></Flex>
    </Box>
  );
}
