import React from "react";
import { ScrollView } from "react-native";
import {
  Container,
  Title,
  Paragraph,
  SubTitle,
  Reference,
  Divider
} from "./styles";

export default function About() {
  return (
    <ScrollView>
      <Container>
        <Title>🌱 Sobre a Monstera Deliciosa</Title>

        <Paragraph>
          A <SubTitle>Monstera deliciosa</SubTitle>, popularmente conhecida como "Costela-de-Adão",
          é uma planta tropical originária das florestas úmidas da América Central. Seu nome científico deriva
          do latim, significando "monstruosa e deliciosa", em referência ao formato exótico de suas folhas e ao fruto comestível que produz em ambiente natural.
        </Paragraph>

        <Paragraph>
          Essa planta pertence à família <SubTitle>Araceae</SubTitle>, a mesma do lírio-da-paz. É bastante apreciada
          na decoração de interiores devido à sua folhagem marcante, que pode atingir grandes proporções com aberturas naturais conhecidas como fenestrações.
        </Paragraph>

        <Divider />

        <Title>📚 Curiosidades Científicas</Title>

        <Paragraph>
          Estudos indicam que as fenestrações das folhas da Monstera ajudam a planta a resistir aos fortes ventos e chuvas de seu habitat natural,
          além de permitir melhor aproveitamento da luz solar filtrada da floresta (Chazdon & Fetcher, 1984).
        </Paragraph>

        <Paragraph>
          Além de sua estética, a Monstera também tem sido estudada por sua capacidade de purificar o ar,
          embora não seja considerada uma das mais eficientes nesse quesito (Wolverton et al., 1989).
        </Paragraph>

        <Divider />

        <Title>🔬 Referências</Title>

        <Reference>
          Chazdon, R. L., & Fetcher, N. (1984). Photosynthetic light environments in a lowland tropical rain forest in Costa Rica. *Journal of Ecology*.
        </Reference>

        <Reference>
          Wolverton, B. C., Johnson, A., & Bounds, K. (1989). *Interior Landscape Plants for Indoor Air Pollution Abatement*. NASA.
        </Reference>

        <Paragraph style={{ marginTop: 20 }}>
          Para mais informações, consulte fontes botânicas confiáveis ou bases de dados científicas.
        </Paragraph>
      </Container>
    </ScrollView>
  );
}
