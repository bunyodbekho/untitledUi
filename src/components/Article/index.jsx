import { Text, Heading, Flex, VStack, Image } from "@chakra-ui/react";

export default function Article() {
  return (
    <Flex bg="#F9FAFB" padding="100px 7%" gap="50px">
      <VStack
        alignItems="flex-start"
        justifyContent="center"
        spacing="20px"
      >
        <Text fontSize="16px" fontWeight="600" color="#1CA350">
          Launch faster
        </Text>

        <Heading fontSize="36px" fontWeight="600" lineHeight="45px">
          Проектирование, поставка и строительство
        </Heading>

        <Text
          color="#475467"
          fontSize="20px"
          fontWeight="400"
          lineHeight="30px"
        >
          Enter Engineering предоставляет полный спектр услуг по проектированию,
          поставкам, строительству и вводу в эксплуатацию нефтегазовых,
          промышленных и гражданских объектов различного уровня сложности.
        </Text>
      </VStack>

      <Image src="src\assets\images\article_1.png" alt="article_1.png" />
    </Flex>
  );
}
