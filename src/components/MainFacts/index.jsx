import {
  Grid,
  GridItem,
  VStack,
  HStack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

const clr_lime = "#1CA350";

const factData = [
  { title: "Квалифицированных специалистов", amount: "45 000 +" },
  { title: "Проектов", amount: "50 +" },
  { title: "Единиц строительной техники", amount: "6 500 +" },
  { title: "Лет опыта", amount: "10 +" },
];

export default function MainFacts() {
  return (
    <VStack
      padding="100px 7%"
      alignItems="flex-start"
      spacing="60px"
      bg="#F9FAFB"
    >
      <VStack alignItems="flex-start">
        <Heading fontSize="16px" fontWeight="600" color={clr_lime}>
          ФАКТЫ
        </Heading>

        <Heading fontSize="36px" fontWeight="600">
          Факты и цифры
        </Heading>
      </VStack>

      <HStack justifyContent="space-between" spacing="50px">
        <Grid templateColumns="repeat(2, 1fr)" gap="30px" flex="1">
          {factData.map((fact) => (
            <GridItem key={fact.title}>
              <Text color={clr_lime} fontSize="60px" fontWeight="600">
                {fact.amount}
              </Text>

              <Heading fontSize="18px" fontWeight="600" mt="15px">
                {fact.title}
              </Heading>
            </GridItem>
          ))}
        </Grid>

        <Image src="./assets/images/main/mainfacts.png" flex="1" />
      </HStack>
    </VStack>
  );
}
