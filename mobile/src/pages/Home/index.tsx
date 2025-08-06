import React from "react";
import { ScrollView } from "react-native";
import {
    Container,
    ContentScrollView,
    ImageHome,
    ImageView,
    InfoView,
    Title,
    SubTitle,
    FeatureBox,
    FeatureIcon,
    FeatureText,
    GetStartedButton,
    GetStartedText,
    ArrowIcon,
    Divider,
    SectionTitle
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppRoutesList } from "../../routes/app.routes";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

type NavigationProps = NativeStackNavigationProp<AppRoutesList, "Home">;

export default function Home() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <Container>
            <ContentScrollView showsVerticalScrollIndicator={false}>
                <ImageView>
                    <ImageHome source={require('../../assets/irrigafacil2.jpg')} />
                </ImageView>

                <InfoView>
                    <Title>Bem-vindo ao Irriga Fácil!</Title>

                    <SubTitle>
                        Promovendo a agricultura sustentável com tecnologia, automação e uso inteligente da água.
                    </SubTitle>

                    <Divider />

                    <SectionTitle>✨ O que você pode fazer:</SectionTitle>

                    <FeatureBox>
                        <FeatureIcon>
                        <MaterialCommunityIcons name="cellphone" size={24} color="#4CAF50" />
                        </FeatureIcon>
                        <FeatureText>Monitore e controle sua irrigação direto do celular</FeatureText>
                    </FeatureBox>

                    <FeatureBox>
                        <FeatureIcon>
                        <MaterialCommunityIcons name="water-pump" size={24} color="#4CAF50" />
                        </FeatureIcon>
                        <FeatureText>Acione a bomba automaticamente de forma remota!</FeatureText>
                    </FeatureBox>

                    <FeatureBox>
                        <FeatureIcon>
                        <MaterialCommunityIcons name="database-eye" size={24} color="#4CAF50" />
                        </FeatureIcon>
                        <FeatureText>Visualize o histórico e os dados de umidade</FeatureText>
                    </FeatureBox>

                    <FeatureBox>
                        <FeatureIcon>
                        <MaterialCommunityIcons name="leaf-circle" size={24} color="#4CAF50" />
                        </FeatureIcon>
                        <FeatureText>Aprenda a cuidar da sua planta com base científica</FeatureText>
                    </FeatureBox>

                    <GetStartedButton onPress={() => navigation.navigate("Dashboard")}>
                        <GetStartedText>Começar</GetStartedText>
                        <ArrowIcon name="arrow-right" size={20} color="white" />
                    </GetStartedButton>
                </InfoView>
            </ContentScrollView>
        </Container>
    );
}
