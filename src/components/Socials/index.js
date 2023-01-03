import {
  Divider,
  Stack,
  IconButton,
  Link,
  useColorModeValue,
  useClipboard,
  Tooltip,
} from "@chakra-ui/react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Socials() {
  const { hasCopied, onCopy } = useClipboard("appolinecogan@gmail.com");
  return (
    <Stack
      align="center"
      mt={150}
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
          aria-label="email"
          variant="ghost"
          size="lg"
          fontSize="2xl"
          icon={<MdEmail />}
          _hover={{
            bg: "pink.500",
            color: useColorModeValue("white", "gray.700"),
          }}
          onClick={onCopy}
          isRound
        />
      </Tooltip>
      <Link href="https://github.com/appolinefr" target="_blank">
        <IconButton
          aria-label="github"
          variant="ghost"
          size="lg"
          fontSize="2xl"
          icon={<BsGithub />}
          _hover={{
            bg: "pink.500",
            color: useColorModeValue("white", "gray.700"),
          }}
          isRound
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/appoline-cogan-91b777236/"
        target="_blank"
      >
        <IconButton
          aria-label="linkedin"
          variant="ghost"
          size="lg"
          icon={<BsLinkedin size="20px" />}
          _hover={{
            bg: "pink.500",
            color: useColorModeValue("white", "gray.700"),
          }}
          isRound
        />
      </Link>
      <Divider orientation="vertical" h="200px" borderColor={"pink"} />
    </Stack>
  );
}
