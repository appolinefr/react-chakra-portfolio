import {
  Divider,
  Stack,
  IconButton,
  Link,
  useColorModeValue,
  useClipboard,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Socials() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1441px)");
  const { hasCopied, onCopy } = useClipboard("appolinecogan@gmail.com");
  const pink = useColorModeValue("pink.500", "pink.400");
  const lightPink = useColorModeValue("pink.500", "pink");
  const button = useColorModeValue("gray.800", "white");

  return (
    <Stack
      align="center"
      mt={isLargerThan1280 ? 250 : 200}
      spacing={5}
      direction={{ md: "column" }}
      display={{ base: "none", md: "flex" }}
      position={"fixed"}
    >
      <Tooltip
        label={hasCopied ? "Email Copied!" : "Copy Email"}
        closeOnClick={false}
        hasArrow
      >
        <IconButton
          color={button}
          aria-label="email"
          variant="ghost"
          size="lg"
          fontSize="2xl"
          icon={<MdEmail />}
          _hover={{
            color: "white",
            bg: pink,
            transition: " all 0.3s ease-in-out",
            transform: "translateY(-4px)",
          }}
          _active={{ color: "white", bg: pink }}
          onClick={onCopy}
          isRound
        />
      </Tooltip>
      <Link href="https://github.com/appolinefr" target="_blank">
        <IconButton
          color={button}
          aria-label="Github"
          variant="ghost"
          size="lg"
          fontSize="2xl"
          icon={<BsGithub />}
          _hover={{
            color: "white",
            bg: pink,
            transition: " all 0.3s ease-in-out",
            transform: "translateY(-4px)",
          }}
          _active={{ color: "white", bg: pink }}
          isRound
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/appoline-cogan-91b777236/"
        target="_blank"
      >
        <IconButton
          color={button}
          aria-label="Linkedin"
          variant="ghost"
          size="lg"
          fontSize="2xl"
          icon={<BsLinkedin />}
          _hover={{
            color: "white",
            bg: pink,
            transition: " all 0.3s ease-in-out",
            transform: "translateY(-4px)",
          }}
          _active={{ color: "white", bg: pink }}
          isRound
        />
      </Link>
      <Divider
        orientation="vertical"
        h={isLargerThan1280 ? "360px" : "250px"}
        borderColor={lightPink}
      />
    </Stack>
  );
}
