import { useRef, useState } from "react";

import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
  Heading,
  Textarea,
  useColorModeValue,
  VStack,
  Stack,
  Button,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

import emailjs from "@emailjs/browser";

import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactForm() {
  const grey = useColorModeValue("gray.600", "gray.400");
  const btn = useColorModeValue("white", "pink.500");
  const focus = useColorModeValue("pink.500", "white");
  const boxBg = useColorModeValue("white", "gray.800");
  const buttonBg = useColorModeValue("pink.400", "gray.800");
  const { colorMode } = useColorMode();
  const form = useRef();
  const [button, setButton] = useState("Send");

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_7hh9zgm",
        "template_43qhnkr",
        form.current,
        "vy0_3laHotgJKbdM5"
      )
      .then(setButton("Message sent!"), (error) => {
        console.log(error.text);
      });
    event.target.reset();
  };

  return (
    <Box as={Center} maxW="full" my={{ base: 4, md: 12, lg: 16 }}>
      <Stack>
        <Heading
          id="contact"
          as={Center}
          fontWeight={600}
          lineHeight={"110%"}
          py={{ base: 8, md: 12 }}
        >
          Get in Touch
        </Heading>
        <Box
          bg={boxBg}
          borderRadius="lg"
          p={8}
          color={useColorModeValue("gray.700", "whiteAlpha.900")}
          boxShadow={
            colorMode === "light"
              ? `0px 1px 12px rgba(236, 99, 166)`
              : `0px 1px 12px white`
          }
          w={{ base: "sm", md: "md", lg: "lg" }}
        >
          <VStack spacing={5}>
            <form ref={form} onSubmit={sendEmail}>
              <FormLabel>Name</FormLabel>
              <InputGroup mb={2}>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  color={grey}
                  _placeholder={{ color: "inherit" }}
                  required
                  name="user_name"
                  placeholder="Your Name"
                  size="md"
                  type="name"
                  focusBorderColor={focus}
                />
              </InputGroup>
              <FormLabel>Email</FormLabel>
              <InputGroup my={2}>
                <InputLeftElement children={<MdOutlineEmail />} />
                <Input
                  color={grey}
                  _placeholder={{ color: "inherit" }}
                  required
                  type="email"
                  placeholder="Your Email"
                  name="user_email"
                  size="md"
                  focusBorderColor={focus}
                />
              </InputGroup>
              <FormLabel>Message</FormLabel>
              <Textarea
                color={grey}
                _placeholder={{ color: "inherit" }}
                required
                type="email"
                placeholder="Your Message"
                name="user_message"
                rows={6}
                focusBorderColor={focus}
              />
              <Flex justify={"center"}>
                <Button
                  mt={6}
                  maxW={40}
                  color={btn}
                  bg={buttonBg}
                  borderRadius="sm"
                  border={"solid"}
                  borderColor={"pink.400"}
                  p={6}
                  type={"submit"}
                  value={button}
                  _hover={{
                    textDecoration: "none",
                    boxShadow: "0px 5px 10px rgba(236, 99, 166)",
                  }}
                >
                  Send
                </Button>
              </Flex>
            </form>
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
}
