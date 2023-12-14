import {
  Grid,
  GridItem,
  VStack,
  HStack,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const cardData = [
  {
    image: "src/assets/images/main/mainnews/news_1.png",
    title: "Проект на стадии завершения",
    txt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
  {
    image: "src/assets/images/main/mainnews/news_2.png",
    title: "На МОФ-3 установлен рекорд по заливке бетона",
    txt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
  },
  {
    image: "src/assets/images/main/mainnews/news_3.png",
    title: "СХК: Строительство идет полным ходом",
    txt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
  },
];

export default function MainNews() {
  return (
    <VStack padding="50px 7%" spacing="50px">
      <HStack alignItems="center" justifyContent="space-between" w="100%">
        <Heading fontSize="36px" fontWeight="600">
          Руководство компании
        </Heading>

        <Button colorScheme="whatsapp" fontSize="16px" padding="20px 20px">
          Все сотрудники
        </Button>
      </HStack>

      <Grid templateColumns="repeat(3, 1fr)" gap="30px">
        {cardData.map((card) => (
          <GridItem
            key={card.image}
            borderRadius="10px"
            overflow="hidden"
            border="1px solid #EAECF0"
          >
            <Image src={card.image} alt={card.image} w="100%" />

            <VStack
              spacing="10px"
              padding="20px"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Heading fontSize="24px" fontWeight="600">
                {card.title}
              </Heading>

              <Text color="#475467" fontSize="16px" fontWeight="400">
                {card.txt}
              </Text>

              <Button variant="ghost" color="#1CA350" padding="0">
                Смотреть
                <Image src="src\assets\images\main\arrow-up-right.svg" />
              </Button>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
}
