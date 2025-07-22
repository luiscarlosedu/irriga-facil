import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import {
    Container,
    Section,
    SectionTitle,
    LogCard,
    LogInfo,
    LogDate,
    LogDetail,
    LogLabel,
    LogValue,
    SectionHeader,
    SectionHeaderBtn,
    SectionHeaderText,
} from "./styles";
import { api } from "../../../services/api";
import { Ionicons } from "@expo/vector-icons";

interface Log {
    id: number;
    data_hora: string;
    umidade: number;
}

export default function Logs() {
    const [registros, setRegistros] = useState<Log[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadLogs();
    }, []);

    async function loadLogs() {
        try {
            const response = await api.get("/logs");
            setRegistros(response.data);
        } catch (err) {
            console.log("[ERROR]", err);
        } finally {
            setLoading(false);
        }
    }

    function convertToPercentage(valorSensor: number): number {
        return Math.round(((1023 - valorSensor) / 1023) * 100);
    }

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
        <Container>
            <Section>
                <SectionHeader style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                    <SectionTitle>🚿 Registros de Irrigação</SectionTitle>
                    <SectionHeaderBtn
                        onPress={() => {
                            setLoading(true);
                            loadLogs();
                        }}
                    >
                        <SectionHeaderText>
                            <Ionicons name="reload" size={23} color="black" />
                        </SectionHeaderText>
                    </SectionHeaderBtn>
                </SectionHeader>

                {loading ? (
                    <ActivityIndicator size="large" color="#4CAF50" />
                ) : (
                    registros.map((item) => (
                        <LogCard key={item.id}>
                            <LogInfo>
                                <LogDate>{formatDateTime(item.data_hora)}</LogDate>
                                <LogDetail>
                                    <LogLabel>Umidade:</LogLabel>
                                    <LogValue>{convertToPercentage(item.umidade)}%</LogValue>
                                </LogDetail>
                            </LogInfo>
                        </LogCard>
                    ))
                )}
            </Section>
        </Container>
    );
};