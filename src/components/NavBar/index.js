import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsSun, BsMoon } from "react-icons/bs";

import AppolinesResume from "../../pdf/AppolinesResume.pdf";

import { Link, animateScroll as scroll } from "react-scroll";

export default function NavBar() {
  const dark = useColorModeValue("gray.800", "white");
  const light = useColorModeValue("white", "gray.800");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();

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
    <Box position="sticky" inset={0} zIndex="sticky">
      <Flex
        minH={"80px"}
        py={{ base: 4 }}
        px={{ base: 6 }}
        align={"center"}
        backgroundColor={light}
      >
        <Flex flex={{ base: 1 }} justify={{ md: "start" }}>
          <Text
            onClick={() => scroll.scrollToTop()}
            textAlign={useBreakpointValue({ md: "left" })}
            fontFamily={"heading"}
            color={dark}
            fontSize={{ sm: "xl", md: "xl", lg: "2xl" }}
            fontWeight={300}
            mr={1}
            _hover={{
              textDecoration: "none",
              color: "pink.500",
              cursor: "pointer",
            }}
          >
            AC
          </Text>
        </Flex>
        <Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            align={"center"}
            spacing={6}
            mr={6}
          >
            <DesktopNav />
            <Text
              ml={6}
              id="downloadBtn"
              value="download"
              onClick={onButtonClick}
              py={2}
              justify={"space-between"}
              align={"center"}
              fontSize={"lg"}
              fontWeight={500}
              color={dark}
              _hover={{
                textDecoration: "none",
                color: "pink.500",
                cursor: "pointer",
              }}
            >
              Resume
            </Text>
          </Flex>
        </Flex>
        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onOpen}
            ref={btnRef}
            icon={<HamburgerIcon w={6} h={6} />}
            color={dark}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            _hover={{
              textDecoration: "none",
            }}
          />
        </Flex>
        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "flex" }}>
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <BsMoon /> : <BsSun w={6} h={6} />}
            color={dark}
            variant={"ghost"}
            _hover={{
              textDecoration: "none",
            }}
          />
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />
          <DrawerBody>
            <MobileNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const NAV_ITEMS = [
  {
    label: "About",
    href: "about",
  },
  {
    label: "Projects",
    href: "projects",
  },
  {
    label: "Contact",
    href: "contact",
  },
];

const DesktopNav = () => {
  const dark = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Flex
          key={navItem.label}
          py={2}
          as={Link}
          to={navItem.href}
          smooth={true}
          transition={1000}
          justify={"space-between"}
          align={"center"}
          fontSize={"lg"}
          fontWeight={500}
          color={dark}
          _hover={{
            textDecoration: "none",
            color: "pink.500",
            cursor: "pointer",
          }}
        >
          {navItem.label}
        </Flex>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
    const dark = useColorModeValue("gray.800", "white");
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
    <Stack p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Text
      
        ml={6}
        id="downloadBtn"
        value="download"
        onClick={onButtonClick}
        py={2}
   
        fontSize={"lg"}
        fontWeight={500}
        color={dark}
        _hover={{
          textDecoration: "none",
          color: "pink.500",
          cursor: "pointer",
        }}
      >
        Resume
      </Text>
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  const dark = useColorModeValue("gray.800", "white");
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        to={href}
        justify={"space-between"}
        align={"center"}
        fontSize={"lg"}
        fontWeight={500}
        color={dark}
        _hover={{
          textDecoration: "none",
          color: "pink.500",
          cursor: "pointer",
        }}
      >
        <Text fontWeight={500}>{label}</Text>
      </Flex>
    </Stack>
  );
};
