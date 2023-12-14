import { VStack, HStack, Heading, Text, Button, Image } from "@chakra-ui/react";

export default function MainHeader({ onAboutPage }) {
  return (
    <HStack padding="100px 7%" spacing="25px">
      <VStack
        flex="1"
        alignItems="flex-start"
        flexDir="column"
        h="400px"
        display="flex"
        justifyContent="space-between"
      >
        <Heading fontSize="44px" fontWeight="600" color="#101828">
          Enter Engineering — признанный EPC-подрядчик!
        </Heading>
        <Text color="#475467" fontSize="20px" fontWeight="400">
          Enter Engineering - одна из крупнейших и динамично развивающихся
          компаний региона, созданная в 2012 году.
        </Text>
        <Text color="#475467" fontSize="20px" fontWeight="400">
          Сегодня компания уверенно укрепляет свои позиции на рынке
          нефтегазового, промышленного и гражданского строительства в
          Центральной Азии.
        </Text>
        <Button
          onClick={() => onAboutPage(true)}
          colorScheme="whatsapp"
          padding="25px 28px"
          fontSize="18px"
        >
          Поодробнее о нас
        </Button>
      </VStack>

      <Image
        flex="1"
        src="./assets/images/main/mainheader.png"
        alt="mainheader.png"
        h="400px"
      />
    </HStack>
  );
}
