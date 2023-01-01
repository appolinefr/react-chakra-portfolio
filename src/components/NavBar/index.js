import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { BsSun } from "react-icons/bs";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box>
      <Flex
        as="header"
        minH={"80px"}
        py={{ base: 4 }}
        px={{ base: 6 }}
        align={"center"}
        backgroundColor={"pink.500"}
      >
        <Flex flex={{ base: 1 }} justify={{ md: "start" }}>
          <Link
            href={"/"}
            textAlign={useBreakpointValue({ md: "left" })}
            fontFamily={"heading"}
            color={"white"}
            fontSize={{ sm: "xl", md: "xl", lg: "2xl" }}
            fontWeight={300}
            mr={1}
            _hover={{
              textDecoration: "none",
            }}
          >
            AC
          </Link>
        </Flex>
        <Flex>
          <Flex display={{ base: "none", md: "flex" }} mr={6}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onOpen}
            ref={btnRef}
            icon={<HamburgerIcon w={6} h={6} />}
            color={"white"}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            _hover={{
              textDecoration: "none",
            }}
          />
        </Flex>
        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "flex" }}>

          <IconButton
            icon={<BsSun w={6} h={6} />}
            color={"white"}
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
    href: "/about",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
  {
    label: "Resume",
  },
];

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"lg"}
                fontWeight={500}
                color={"white"}
                _hover={{
                  textDecoration: "none",
                  color: "gray.600",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={500}>{label}</Text>
      </Flex>
    </Stack>
  );
};
