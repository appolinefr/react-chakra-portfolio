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
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsSun, BsMoon } from "react-icons/bs";

import Resume from "../Resume";

import { Link, animateScroll as scroll } from "react-scroll";

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

export default function NavBar() {
  const dark = useColorModeValue("gray.700", "white");
  const light = useColorModeValue("white", "gray.800");
  const pink = useColorModeValue("pink.500", "pink.400");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();

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
          <Heading
            onClick={() => scroll.scrollToTop()}
            textAlign={useBreakpointValue({ md: "left" })}
            color={dark}
            fontSize={{ base: "2xl", xl: "3xl" }}
            fontWeight={400}
            lineHeight={"110%"}
            p={2}
            mx={2}
            _hover={{
              textDecoration: "none",
              color: "pink.500",
              cursor: "pointer",
            }}
          >
            AC
          </Heading>
        </Flex>
        <Flex>
          <Flex display={{ base: "none", md: "flex" }} align={"center"} mr={6}>
            <DesktopNav />
            <Resume />
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
              color: pink,
            }}
            _active={{ color: pink }}
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
              color: pink,
            }}
            _active={{ color: pink }}
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
        <DrawerContent backgroundColor={light}>
          <DrawerCloseButton onClick={onClose} />
          <DrawerBody>
            <MobileNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const DesktopNav = () => {
  const dark = useColorModeValue("gray.700", "white");

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
  return (
    <Stack py={6} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Flex direction={"column"} align={"center"} py={4}>
        <Resume />
      </Flex>
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  const dark = useColorModeValue("gray.700", "white");
  return (
    <Stack spacing={6}>
      <Flex
        ml={6}
        direction={"column"}
        py={4}
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
