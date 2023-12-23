import { Flex, Heading } from "@chakra-ui/react";

export default function Main({ bgUrl }) {
  return (
    <Flex
      h="70vh"
      bgImage={`url(${bgUrl})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      padding="0 9%"
      flexDir="column"
      justifyContent="center"
      color="#fff"
    >
      <Heading fontSize="16px">{"Главная/ О компании"}</Heading>
      <Heading fontSize="48px">{"О Компании"}</Heading>
    </Flex>
  );
}
