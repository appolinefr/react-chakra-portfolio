import { Text, Button, useColorModeValue } from "@chakra-ui/react";

import AppolinesResume from "../../pdf/AppolinesResume.pdf";

export default function Resume() {
  const buttonBg = useColorModeValue("pink.500", "gray.800");
  const buttonText = useColorModeValue("white", "pink.400");
  const buttonBorder = useColorModeValue("pink.500", "pink.400");

  const onButtonClick = () => {
    fetch(AppolinesResume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = AppolinesResume;
        alink.click();
      });
    });
  };

  return (
    <Text
      as={Button}
      maxW={"100px"}
      id="downloadBtn"
      value="download"
      onClick={onButtonClick}
      py={4}
      ml={6}
      fontSize={"lg"}
      fontWeight={500}
      color={buttonText}
      bg={buttonBg}
      border={"solid"}
      borderColor={buttonBorder}
      _hover={{
        cursor: "pointer",
        textDecoration: "none",
        bg: buttonBg,
        boxShadow: `0px 1px 12px rgba(236, 99, 166)`,
      }}
      _active={{
        cursor: "pointer",
        textDecoration: "none",
        bg: buttonBg,
        boxShadow: `0px 1px 12px rgba(236, 99, 166)`,
      }}
    >
      Resume
    </Text>
  );
}
