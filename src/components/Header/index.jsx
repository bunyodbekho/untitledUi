import { Flex, Button, HStack, VStack, Text, Image } from "@chakra-ui/react";
import { phoneSVG } from "../../../public/assets/svg";

const txtColor = "#475467";

const links = [
  {
    title: "Компания",
    linkTo: "/about",
  },
  {
    title: "Дятельность",
    linkTo: "/activity",
  },
  {
    title: "Карьера",
    linkTo: "/career",
  },
  {
    title: "Устойчивое развитие",
    linkTo: "/development",
  },
  {
    title: "Контакты",
    linkTo: "/contacts",
  },
];

export default function Header({ onSetPage }) {
  return (
    <Flex
      bg="#fff"
      padding="15px 7%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image
        src="src\assets\images\logo\logo_purple.png"
        onClick={() => onSetPage("/")}
        cursor="pointer"
      />

      <HStack spacing="20px">
        {links.map((link, i) => (
          <Button
            key={i}
            onClick={() => onSetPage(link?.linkTo)}
            color={txtColor}
            variant="link"
            fontSize="14px"
          >
            {link?.title}
          </Button>
        ))}
      </HStack>

      <HStack spacing="10px">
        {phoneSVG}
        <VStack spacing="5px">
          <Text color={txtColor} fontWeight="600">
            {"+998 (99) 123 45 67"}
          </Text>
          <Text color={txtColor} fontWeight="600">
            {"+998 (99) 123 45 67"}
          </Text>
        </VStack>
      </HStack>

      <HStack spacing="10px">
        <Button color={txtColor} variant="ghost">
          Log in
        </Button>
        <Button colorScheme="whatsapp" variant="solid">
          Sign up
        </Button>
      </HStack>
    </Flex>
  );
}
