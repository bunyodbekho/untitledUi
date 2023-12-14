import { VStack, HStack, Heading, Text, Image } from "@chakra-ui/react";

const iconData = [
  { text: "Апстрим", src: "src/assets/images/serviceicons/serviceicon_1.png" },
  {
    text: "Даунстрим",
    src: "src/assets/images/serviceicons/serviceicon_2.png",
  },
  {
    text: "Инфраструктура",
    src: "src/assets/images/serviceicons/serviceicon_3.png",
  },
  {
    text: "Энергетика",
    src: "src/assets/images/serviceicons/serviceicon_4.png",
  },
  { text: "Мидстрим", src: "src/assets/images/serviceicons/serviceicon_5.png" },
];

export default function MainServices() {
  return (
    <VStack padding="100px 7%" spacing="50px">
      <Heading fontSize="36px" fontWeight="600">
        Спектр услуг
      </Heading>

      <Text color="#475467" fontSize="20px" fontWeight="400">
        Open a full-featured account in with virtual cards in less than 5
        minutes.
      </Text>

      <HStack justifyContent="space-between" w="100%">
        {iconData.map((icon) => (
          <VStack key={icon.src} w="30%" alignItems="center" spacing="20px">
            <Image src={icon.src} alt={icon.text} w="50px" h="50px" />

            <Text fontSize="20px" fontWeight="600">
              {icon.text}
            </Text>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}
