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
} from "@chakra-ui/react";

import emailjs from "@emailjs/browser";

import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactForm() {
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
    <Box>
      <Heading id="contact"
        as={Center}
        fontWeight={600}
        fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        lineHeight={"110%"}
        my={{ base: 12, md: 16, lg: 24 }}
      >
        Get in Touch
      </Heading>
      <Box
        borderRadius="lg"
        my={{ base: 4, md: 8, lg: 8 }}
        p={{ sm: 4, md: 8, lg: 8 }}
        bg="pink"
      >
        <Box>
          <Box
            bg={useColorModeValue("white", "gray.700")}
            borderRadius="lg"
            p={8}
            color={useColorModeValue("gray.700", "whiteAlpha.900")}
            shadow="base"
            w={{ base: "sm", md: "md", lg: "lg" }}
          >
            <VStack spacing={5}>
              <form ref={form} onSubmit={sendEmail}>
                <FormLabel>Name</FormLabel>
                <InputGroup mb={2}>
                  <InputLeftElement children={<BsPerson />} />
                  <Input
                    required
                    name="user_name"
                    placeholder="Your Name"
                    size="md"
                    type="name"
                    focusBorderColor="#FF5677"
                  />
                </InputGroup>
                <FormLabel>Email</FormLabel>
                <InputGroup my={2}>
                  <InputLeftElement children={<MdOutlineEmail />} />
                  <Input
                    required
                    type="email"
                    placeholder="Your Email"
                    name="user_email"
                    size="md"
                    focusBorderColor="#FF5677"
                  />
                </InputGroup>
                <FormLabel>Message</FormLabel>
                <Textarea
                  required
                  type="email"
                  placeholder="Your Message"
                  name="user_message"
                  rows={6}
                  focusBorderColor="#FF5677"
                />
                <Input
                  mt={4}
                  fontWeight={600}
                  type={"submit"}
                  value={button}
                  maxW={40}
                  color="white"
                  bg={"pink.400"}
                  rounded={"full"}
                  px={6}
                  _hover={{
                    bg: "white",
                    color: "pink.400",
                    borderColor: "pink.400",
                    cursor: "pointer",
                  }}
                />
              </form>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
