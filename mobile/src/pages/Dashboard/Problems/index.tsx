import React from "react";
import { ScrollView } from "react-native";
import {
  Container,
  Title,
  Paragraph,
  SubTitle,
  Divider,
  TipList,
  TipItem,
  TipBullet,
  TipText,
} from "./styles";

export default function Problems() {
    return (
        <ScrollView>
            <Container>
                <Title>🌿 Cuidados com a Planta</Title>

                <Paragraph>
                    A <SubTitle>Monstera deliciosa</SubTitle> é uma planta tropical resistente e versátil. No entanto, para que cresça saudável e exuberante, é essencial seguir algumas recomendações de cuidado:
                </Paragraph>

                <TipList>
                    <TipItem>
                        <TipBullet>•</TipBullet>
                        <TipText>Evite exposição direta ao sol forte, pois pode causar queimaduras nas folhas.</TipText>
                    </TipItem>
                    <TipItem>
                        <TipBullet>•</TipBullet>
                        <TipText>Mantenha o solo sempre levemente úmido, evitando o encharcamento.</TipText>
                    </TipItem>
                    <TipItem>
                        <TipBullet>•</TipBullet>
                        <TipText>Realize podas regulares para controlar o tamanho e remover folhas secas.</TipText>
                    </TipItem>
                    <TipItem>
                        <TipBullet>•</TipBullet>
                        <TipText>Utilize adubos orgânicos ou equilibrados a cada 3–4 semanas, especialmente na primavera e verão.</TipText>
                    </TipItem>
                </TipList>

                <Divider />

                <Title>🚿 Funcionamento da Bomba e Irrigação</Title>

                <Paragraph>
                    O sistema de irrigação automatizado detecta a umidade do solo através de um sensor conectado ao Arduino. Quando o solo atinge um nível seco, a bomba é acionada automaticamente para irrigar a planta.
                </Paragraph>

                <Paragraph>
                    Também é possível acionar a bomba manualmente pelo aplicativo ou programar um agendamento fixo para irrigação. Isso evita desperdício e torna o sistema inteligente e sustentável.
                </Paragraph>

                <Divider />

                <Title>💧 Por que controlar a umidade?</Title>

                <Paragraph>
                    Um solo muito seco pode prejudicar o desenvolvimento da planta, enquanto o excesso de água favorece fungos e apodrecimento das raízes.
                </Paragraph>

                <Paragraph>
                    Por isso, o sistema foi projetado para medir a umidade constantemente e irrigar apenas quando necessário — promovendo economia de água e saúde para sua planta.
                </Paragraph>
            </Container>
        </ScrollView>
    );
};