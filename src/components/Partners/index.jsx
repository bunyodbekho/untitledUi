import { HStack, VStack, Heading, Image } from "@chakra-ui/react";

const logos = [
  "./assets/images/partners/company_1.png",
  `./assets/images/partners/company_2.png`,
  "./assets/images/partners/company_3.png",
  "./assets/images/partners/company_4.png",
  "./assets/images/partners/company_5.png",
  "./assets/images/partners/company_6.png",
  "./assets/images/partners/company_7.png",
  "./assets/images/partners/company_8.png",
  "./assets/images/partners/company_9.png",
  "./assets/images/partners/company_10.png",
];

export default function Partners() {
  return (
    <VStack padding="100px 7%" spacing="30px">
      <Heading textAlign="center" color="#475467" fontSize="36px">
        Наши партнеры
      </Heading>

      <HStack wrap="wrap" spacing="30px" justifyContent="center">
        {logos.map((logo, i) => (
          <Image src={logo} key={logo} alt={`company_${i}`} />
        ))}
      </HStack>
    </VStack>
  );
}
