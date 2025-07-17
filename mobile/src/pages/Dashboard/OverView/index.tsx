import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonRow, Container, Value } from "./styles";
import { Button, ButtonText, ImagePlant, Label, MoistureCard, MoistureIcon, MoistureInfo, MoistureStatus, MoistureValue, Row, Section, SectionTitle } from "./styles";

const calcularUmidade = (valor: number): number => {
    return Math.max(0, Math.min(100, 100 - Math.round((valor / 1023) * 100)));
};

export default function OverView() {
    const leituraSensor = 870;
    const umidade = calcularUmidade(leituraSensor);

    const bombaLigada = false;
    const ultimaIrrigacao = "16/07/2025 às 14:32";

    const historicoBruto = [920, 780, 650, 1023, 850];
    const historico = historicoBruto.map(calcularUmidade);

    const getStatusUmidade = (): "Alta" | "Moderada" | "Baixa" => {
        if (umidade >= 70) return "Alta";
        if (umidade >= 40) return "Moderada";
        return "Baixa";
    };

    const status = getStatusUmidade();

    return (
        <Container>
            {/* 🌿 Planta */}
            <Section>
                <SectionTitle>🌿 Planta</SectionTitle>
                <ImagePlant
                    source={{
                        uri: "https://images.tcdn.com.br/img/img_prod/665728/suporte_anel_para_trelica_gancho_vaso_autoirrigavel_15cm_1325_4_b527aeffc8cafdf458dd6b9b25e201a8.jpeg",
                    }}
                    resizeMode="cover"
                />
                <Label>Monstera Deliciosa</Label>
            </Section>

            {/* 💧 Umidade do Solo */}
            <Section>
                <SectionTitle>💧 Umidade do Solo</SectionTitle>
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
                            ? "#673AB7" // roxo úmido
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
                <SectionTitle>⚙️ Bomba</SectionTitle>
                <Label>Status: {bombaLigada ? "Ligada" : "Desligada"}</Label>
            </Section>

            {/* 🕒 Última Irrigação */}
            <Section>
                <SectionTitle>🕒 Última Irrigação</SectionTitle>
                <Label>{ultimaIrrigacao}</Label>
            </Section>

            {/* 📈 Histórico */}
            <Section>
                <SectionTitle>📈 Histórico de Umidade</SectionTitle>
                {historico.map((item, index) => (
                    <Row key={index}>
                        <Label>Registro {index + 1}:</Label>
                        <Value>{item}%</Value>
                    </Row>
                ))}
            </Section>

            {/* 🔘 Ações */}
            <ButtonRow>
                <Button onPress={() => {}}>
                    <ButtonText>🔄 Atualizar</ButtonText>
                </Button>
                <Button onPress={() => {}}>
                    <ButtonText>🚿 Acionar Bomba</ButtonText>
                </Button>
            </ButtonRow>
        </Container>
    );
};