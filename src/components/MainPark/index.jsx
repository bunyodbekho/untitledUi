import {
  Text,
  Heading,
  HStack,
  VStack,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const clr_lime = "#1CA350";

export default function MainPark() {
  return (
    <VStack alignItems="flex-start" padding="100px 7%" spacing="60px">
      <VStack w="60%" alignItems="flex-start">
        <Heading fontSize="16px" fontWeight="600" color={clr_lime}>
          Features
        </Heading>

        <Heading fontSize="36px" fontWeight="600">
          Парк техники
        </Heading>

        <Text color="#475467" fontSize="20px" fontWeight="400">
          Собственный парк строительной техники и оборудования Enter Engineering
          от ведущих производителей насчитывает 6 500+ единиц.
        </Text>
      </VStack>

      <HStack spacing="60px">
        <VStack alignItems="flex-start" spacing="10px" flex="1">
          <Heading fontSize="20px" fontWeight="600">
            ОБОРУДОВАНИЕ
          </Heading>

          <Text
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            color="#475467"
          >
            Группа сотрудничает с ведущими мировыми производителями и
            поставщиками промышленного оборудования и материалов. Вся техника и
            оборудование, которая используется в Enter Engineering, имеет
            необходимые сертификаты и отвечает всем требованиям эксплуатации в
            сфере промышленного и гражданского строительства.
          </Text>
        </VStack>

        <HStack spacing="25px" flex="1">
          <Image src="src/assets/images/main/mainchart.svg" />

          <UnorderedList
            fontSize="16px"
            fontWeight="400"
            color="475467"
            spacing="12px"
          >
            <ListItem>Легковые автомобили:802 ед</ListItem>
            <ListItem>Легковые автомобили:802 ед</ListItem>
            <ListItem>Легковые автомобили:802 ед</ListItem>
            <ListItem>Легковые автомобили:802 ед</ListItem>
            <ListItem>Легковые автомобили:802 ед</ListItem>
          </UnorderedList>
        </HStack>
      </HStack>
    </VStack>
  );
}
