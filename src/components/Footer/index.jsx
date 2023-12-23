import {
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";

const linkData = [
  {
    title: "Product",
    button: [
      { name: "Overview", link: "" },
      { name: "Features", link: "" },
      { name: "Solutions", link: "" },
      { name: "Tutorials", link: "" },
      { name: "Pricing", link: "" },
      { name: "Releases", link: "" },
    ],
  },
  {
    title: "Company",
    button: [
      { name: "About us", link: "" },
      { name: "Careers", link: "" },
      { name: "Press", link: "" },
      { name: "News", link: "" },
      { name: "Media kit", link: "" },
      { name: "Contact", link: "" },
    ],
  },
  {
    title: "Resources",
    button: [
      { name: "Blog", link: "" },
      { name: "Newsletter", link: "" },
      { name: "Events", link: "" },
      { name: "Help centre", link: "" },
      { name: "Tutorials", link: "" },
      { name: "Support", link: "" },
    ],
  },
  {
    title: "Social",
    button: [
      { name: "Twitter", link: "" },
      { name: "LinkedIn", link: "" },
      { name: "Facebook", link: "" },
      { name: "GitHub", link: "" },
      { name: "AngelList", link: "" },
      { name: "Dribbble", link: "" },
    ],
  },
  {
    title: "Legal",
    button: [
      { name: "Terms", link: "" },
      { name: "Privacy", link: "" },
      { name: "Cookies", link: "" },
      { name: "Licenses", link: "" },
      { name: "Settings", link: "" },
      { name: "Contact", link: "" },
    ],
  },
];

const icons = [
  "./assets/images/icons/icon_1.svg",
  "./assets/images/icons/icon_2.svg",
  "./assets/images/icons/icon_3.svg",
  "./assets/images/icons/icon_4.svg",
  "./assets/images/icons/icon_5.svg",
];

export default function Footer() {
  return (
    <>
      <VStack padding="100px 7%" alignItems="flex-start">
        <HStack alignItems="flex-start" spacing="60px">
          <VStack spacing="30px" alignItems="flex-start">
            <Image src="./assets/images/logo/logo_green.png" />
            <Text color="#475467" fontSize="16px" fontWeight="400">
              Design amazing digital experiences that create more happy in the
              world.
            </Text>
          </VStack>

          {linkData.map((column) => (
            <VStack key={column.title} alignItems="flex-start" spacing="20px">
              <Heading fontSize="14px" fontWeight="600" color="#667085">
                {column.title}
              </Heading>
              {column.button.map((button) => (
                <Button
                  key={button.name}
                  variant="link"
                  fontSize="16px"
                  fontWeight="600"
                  color="black"
                >
                  {button.name}
                </Button>
              ))}
            </VStack>
          ))}
        </HStack>
      </VStack>

      <HStack padding="30px 7%" bg="#F9FAFB" justifyContent="space-between">
        <Text fontSize="16px" fontWeight="400" color="#667085">
          © 2077 Untitled UI. All rights reserved.
        </Text>
        <HStack spacing="24px">
          {icons.map((icon) => (
            <Link key={icon}>
              <Image src={icon} w="25px" h="25px" />
            </Link>
          ))}
        </HStack>
      </HStack>
    </>
  );
}
