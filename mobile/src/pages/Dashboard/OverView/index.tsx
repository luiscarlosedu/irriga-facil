import { Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { ButtonRow, Container, TitleContainer, Value } from "./styles";
import { Button, ButtonText, ImagePlant, Label, MoistureCard, MoistureIcon, MoistureInfo, MoistureStatus, MoistureValue, Row, Section, SectionTitle } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { ActivityIndicator, View } from "react-native";

const calcularUmidade = (valor: number): number => {
    return Math.max(0, Math.min(100, 100 - Math.round((valor / 1023) * 100)));
};

export default function OverView() {
    const [loading, setLoading] = useState(true);
    const [leituraSensor, setLeituraSensor] = useState<number>(0);
    const [ultimaIrrigacao, setUltimaIrrigacao] = useState("Erro ao carregar dados!");
    const [historicoBruto, setHistoricoBruto] = useState([]);
    const umidade = calcularUmidade(leituraSensor);
    const bombaLigada = false;

    const historico = historicoBruto.map(calcularUmidade) ?? "Erro ao carregar dados";

    const getStatusUmidade = (): "Alta" | "Moderada" | "Baixa" => {
        if (umidade >= 70) return "Alta";
        if (umidade >= 40) return "Moderada";
        return "Baixa";
    };

    const status = getStatusUmidade();

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            setLoading(true);
            await Promise.all([loadLastLog(), loadMoisture(), loadLastMoitures()]);
        } catch (err) {
            console.log("[ERROR]", err);
        } finally {
            setLoading(false);
        }
    }

    async function loadLastLog() {
        try {
            const response = await api.get("/logs/last");
            setUltimaIrrigacao(formatDateTime(response.data.data_hora));
        } catch (err) {
            console.log("[ERRO]");
        };
    };

    async function loadMoisture() {
        try {
            const response = await api.get("/moisture");
            setLeituraSensor(response.data.umidade);
        } catch (err) {
            console.log("[ERRO]");
        };
    };

    async function loadLastMoitures() {
        try {
            const response = await api.get("/last/moistures");
            const dados = response.data;

            const valores = dados.map((item: { umidade: number }) => item.umidade);

            setHistoricoBruto(valores);
        } catch (err) {
            console.log("[ERRO]!");
        }
    };

    function formatDateTime(isoDate: string) {
        const date = new Date(isoDate);
        const dia = String(date.getDate()).padStart(2, "0");
        const mes = String(date.getMonth() + 1).padStart(2, "0");
        const ano = date.getFullYear();
        const horas = String(date.getHours()).padStart(2, "0");
        const minutos = String(date.getMinutes()).padStart(2, "0");

        return `${dia}/${mes}/${ano} às ${horas}:${minutos}`;
    }

    return (
        loading ? (
            <Container>
                <ActivityIndicator size="large" color="#4CAF50" style={{ marginTop: 32 }} />
            </Container>
        ) : (
            <Container>
                {/* 🌿 Planta */}
                <Section>
                    <SectionTitle>🌿 Planta</SectionTitle>
                    <ImagePlant
                        source={require('../../../assets/monstera.jpeg')}
                        resizeMode="cover"
                    />
                    <Label>Monstera Deliciosa</Label>
                </Section>

                {/* 💧 Umidade do Solo */}
                <Section>
                    <TitleContainer>
                        <Ionicons name="water" size={23} color={"#48C5F3"} />
                        <SectionTitle>Umidade do Solo</SectionTitle>
                    </TitleContainer>

                    <MoistureCard status={status}>
                        <MoistureInfo>
                            <MoistureValue>{umidade}%</MoistureValue>
                            <MoistureStatus status={status}>{status}</MoistureStatus>
                        </MoistureInfo>

                        <MoistureIcon>
                            <MaterialCommunityIcons
                                name="water-percent"
                                size={32}
                                color={
                                    status === "Alta"
                                    ? "#673AB7" 
                                    : status === "Moderada"
                                    ? "#4CAF50"
                                    : "#FF5722"
                                }
                            />
                        </MoistureIcon>

                    </MoistureCard>
                </Section>

                {/* ⚙️ Bomba */}
                <Section>
                    <TitleContainer>
                        <FontAwesome6 name="gear" size={23} color={"#81ACBB"} />
                        <SectionTitle>Bomba</SectionTitle>
                    </TitleContainer>
                    <Label>Status: {bombaLigada ? "Ligada" : "Desligada"}</Label>
                </Section>

                {/* 🕒 Última Irrigação */}
                <Section>
                    <TitleContainer>
                        <Feather name="clock" size={23} />
                        <SectionTitle>Última Irrigação</SectionTitle>
                    </TitleContainer>
                    <Label>{ultimaIrrigacao}</Label>
                </Section>

                {/* 📈 Histórico */}
                <Section>
                    <TitleContainer>
                        <Octicons name="graph" size={23} />
                        <SectionTitle>Histórico de Umidade</SectionTitle>
                    </TitleContainer>
                    {historico.map((item, index) => (
                        <Row key={index}>
                            <Label>Registro {index + 1}:</Label>
                            <Value>{item}%</Value>
                        </Row>
                    ))}
                </Section>

                {/* 🔘 Ações */}
                <ButtonRow>
                    <Button onPress={() => loadData()}>
                        <MaterialIcons name="update" size={20} color={"white"} />
                        <ButtonText>Atualizar</ButtonText>
                    </Button>
                    {/* <Button onPress={() => {}}>
                        <MaterialIcons name="shower" size={20} color={"white"} />
                        <ButtonText>Acionar Bomba</ButtonText>
                    </Button> */}
                </ButtonRow>
            </Container>
        )
    );
};