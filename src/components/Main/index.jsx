import { Flex, Heading } from "@chakra-ui/react";

export default function Main() {
  return (
    <Flex
      h="70vh"
      bgImage="url('https://s3-alpha-sig.figma.com/img/aa12/8ff4/9c9825f7e0ce74ee8417464e705e87eb?Expires=1703462400&Signature=XYncvknSAZImRAS8QPhdAGg~isXTPCfBc4dUZNGimcYlq7R-6FLFqQrYIMiOE3FGDj-FhmmLjWxoNgi6A4HiyQSkza70-c8HHkWUAGIpJGp16cL3fGGTbMOzmESToP5VfwllAJpqZygbxjemOz3AKG1zGrhjEN0-KHA6u2lkwLyBeUhr5Wastg-o8EaSTBHeQKzwrPdLpxUx3ZevULvQcXhShkpqytySIdBHWoKCTv1oRWZNKtzgVJ~9~VekMBUJ9XJBwUxSmYJA28L7tXNx2V9rDLk5BNYmrGqo8wJaFbIN1wVq6fQp~XHgqYXqhj-IeP8VPiIFYeif~hsPh0d9qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      padding="0 9%"
      flexDir="column"
      justifyContent="center"
      color="#fff"
    >
      <Heading fontSize="16px">{"Главная/ О компании"}</Heading>
      <Heading fontSize="48px">{"О Компании"}</Heading>
    </Flex>
  );
}
