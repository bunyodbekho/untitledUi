import {
  Grid,
  GridItem,
  Heading,
  Button,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";

const cardData = [
  "Реконструкция и строительство мемориального комплекса имама Аль-Бухари",
  "Расширение производственной мощности Шуртанского газохимического комплекса",
  "Расширение производственной мощности Шуртанского газохимического комплекса",
  "Строительство ПХГ «Газли» ДКС-6",
];

export default function MainProjects() {
  return (
    <VStack padding="100px 7%" spacing="50px">
      <HStack alignItems="center" justifyContent="space-between" w="100%">
        <Heading fontSize="36px" fontWeight="600">
          Руководство компании
        </Heading>

        <Button colorScheme="whatsapp" fontSize="16px" padding="20px 20px">
          Все сотрудники
        </Button>
      </HStack>

      <Grid templateColumns="repeat(2, 1fr)" gap="30px">
        {cardData.map((card, i) => (
          <GridItem
            key={i}
            borderRadius="10px"
            overflow="hidden"
            border="1px solid #EAECF0"
          >
            <HStack spacing="25px">
              <Image src="./assets/images/main/mainprojects.png" />

              <VStack alignItems="flex-start">
                <Heading fontSize="18px" fontWeight="600" lineHeight="28px">
                  {card}
                </Heading>

                <Button variant="ghost" color="#1CA350" padding="0">
                  Смотреть <Image src="./assets/images/main/Eye.svg" />
                </Button>
              </VStack>
            </HStack>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
}
