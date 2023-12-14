import {
  VStack,
  Heading,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export default function Goals() {
  return (
    <VStack bg="#F9FAFB">
      <VStack
        fontSize="16px"
        fontWeight="400"
        alignItems="flex-start"
        padding="50px 7%"
        spacing="30px"
      >
        <Heading fontSize="36px" fontWeight="600">
          МИССИЯ И СТРАТЕГИЯ
        </Heading>

        <Text>
          Enter Engineering продолжает укреплять свои позиции на рынке
          Узбекистана, реализуя крупномасштабные строительные проекты в
          нефтегазовом, промышленном и гражданском секторах.
        </Text>

        <Text>
          Компания имеет хорошие возможности как для сохранения лидерства на
          рынке нефти и газа, так и для расширения участия в энергетическом и
          химическом секторах:
        </Text>

        <UnorderedList>
          <ListItem>
            стабильное присутствие на рынке, существующие клиенты и репутация
            эксперта в области технологий;
          </ListItem>

          <ListItem>тесные отношения с ключевыми игроками рынка;</ListItem>
          <ListItem>
            комплексный подход к строительному циклу (от тендера до завершения);
          </ListItem>

          <ListItem>
            взаимодействие со всеми, кто вовлечен в процесс планирования проекта
            на раннем этапе (поставщики, специализированные работники,
            субподрядчики).
          </ListItem>
        </UnorderedList>
      </VStack>

      <VStack
        fontSize="16px"
        fontWeight="400"
        alignItems="flex-start"
        padding="50px 7%"
        spacing="30px"
      >
        <Heading fontSize="20px" fontWeight="700">
          ПРОДОЛЖЕНИЕ УСПЕШНОЙ СТРАТЕГИИ ДИВЕРСИФИКАЦИИ
        </Heading>

        <UnorderedList>
          <ListItem>
            Стратегия диверсификации Enter Engineering (нефтегазовая
            промышленность, химическая промышленность и гражданское
            строительство) помогла сохранить маржу, несмотря на сложные рыночные
            условия;
          </ListItem>

          <ListItem>
            Компания сосредоточена на сферах деятельности, где есть конкурентные
            преимущества. В их числе, лидирующее положение на рынке и высокая
            стабильная репутация в вопросах качества и технической экспертизы;
          </ListItem>

          <ListItem>
            Enter Engineering стремится войти в энергетический сектор в
            партнерстве с другими ведущими компаниями;
          </ListItem>
        </UnorderedList>
      </VStack>
    </VStack>
  );
}
