import { VStack, HStack, Heading, Button, Image } from "@chakra-ui/react";

const images = [
  "src/assets/images/main/mainmanagement/person_2.png",
  "src/assets/images/main/mainmanagement/person_1.png",
  "src/assets/images/main/mainmanagement/person_3.png",
];

export default function MainManagement() {
  return (
    <VStack padding="50px 7%" spacing="60px">
      <HStack alignItems="center" justifyContent="space-between" w="100%">
        <Heading fontSize="36px" fontWeight="600">
          Руководство компании
        </Heading>

        <Button colorScheme="whatsapp" fontSize="16px" padding="20px 20px">
          Все сотрудники
        </Button>
      </HStack>

      <HStack w="100%" spacing="32px">
        {images.map((image, i) => (
          <Image key={i} src={image} />
        ))}
      </HStack>

      <HStack justifyContent="flex-start" spacing="20px" w="100%">
        <Image
          src="src\assets\images\main\arrows\arrow-left.svg"
          padding="20px"
          border="1px solid gray"
          borderRadius="full"
          cursor="pointer"
        />
        <Image
          src="src\assets\images\main\arrows\arrow-right.svg"
          padding="20px"
          border="1px solid gray"
          borderRadius="full"
          cursor="pointer"
        />
      </HStack>
    </VStack>
  );
}
