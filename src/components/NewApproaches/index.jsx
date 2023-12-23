import { VStack, HStack, Image, Heading, Text, Button } from "@chakra-ui/react";

export default function NewApproaches() {
  return (
    <HStack padding="100px 7%" spacing="50px" h="800px" bg="#F9FAFB">
      <Image
        flex="1"
        src="assets/images/main/mainnewapproach.png"
        alt="mainnewapproach.png"
        h="100%"
      />

      <VStack alignItems="flex-start" spacing="30px" flex="1">
        <Heading fontSize="48px" fontWeight="600">
          Новые подходы для развития строительной отрасли!
        </Heading>

        <Text fontSize="20px" fontWeight="400" color="#475467">
          Enter Engineering активно внедряет инновационные технологии и подходы
          к оказанию услуг промышленного инжиниринга по EPC-контрактам.
        </Text>

        <Button colorScheme="whatsapp" padding="25px 28px" fontSize="18px">
          О компании
        </Button>
      </VStack>
    </HStack>
  );
}
