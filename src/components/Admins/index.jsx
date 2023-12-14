import { VStack, Heading, Text, Image, Grid, GridItem } from "@chakra-ui/react";

const people = [
  {
    id: "1",
    src: "./assets/images/people/person_1.png",
    name: "Amélie Laurent",
    position: "Founder & CEO",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    color: "#1CA350",
  },
  {
    id: "2",
    src: "./assets/images/people/person_2.png",
    name: "Nikolas Gibbons",
    position: "Engineering Manager",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    color: "#1CA350",
  },
  {
    id: "3",
    src: "./assets/images/people/person_3.png",
    name: "Sienna Hewitt",
    position: "Product Manager",
    description: "Former PM for Linear, Lambda School, and On Deck.",
    color: "#1CA350",
  },
  {
    id: "4",
    src: "./assets/images/people/person_4.png",
    name: "Lily-Rose Chedjou",
    position: "Frontend Developer",
    description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    color: "#1CA350",
  },
  {
    id: "5",
    src: "./assets/images/people/person_5.png",
    name: "Zahra Christensen",
    position: "Backend Developer",
    description: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
    color: "#1CA350",
  },
  {
    id: "6",
    src: "./assets/images/people/person_6.png",
    name: "Caitlyn King",
    position: "Product Designer",
    description:
      "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
    color: "#1CA350",
  },
  {
    id: "7",
    src: "./assets/images/people/person_7.png",
    name: "Zaid Schwartz",
    position: "UX Researcher",
    description:
      "Lead user research for Slack. Contractor for Netflix and Udacity.",
    color: "#6941C6",
  },
  {
    id: "8",
    src: "./assets/images/people/person_8.png",
    name: "Marco Kelly",
    position: "Customer Success",
    description: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.",
    color: "#6941C6",
  },
];

export default function Admins() {
  return (
    <VStack padding="100px 7%" spacing="50px">
      <Heading fontSize="36px" fontWeight="600" color="#000">
        РУКОВОДСТВО
      </Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap="50px">
        {people.map((person) => (
          <GridItem key={person.id} flexDir="column">
            <Image src={person.src} w="100%" />

            <VStack alignItems="flex-start" mt="20px">
              <Heading fontSize="20px" fontWeight="600">
                {person.name}
              </Heading>

              <Text fontSize="18px" fontWeight="400" color={person.color}>
                {person.position}
              </Text>

              <Text fontSize="16px" fontWeight="400">
                {person.description}
              </Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
}
