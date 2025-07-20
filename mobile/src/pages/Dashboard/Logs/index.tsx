import React from "react";
import { FlatList, Text } from "react-native";
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
} from "./styles";

const registros = [
    { id: "1", data: "16/07/2025", hora: "14:32", umidade: 38 },
    { id: "2", data: "15/07/2025", hora: "11:45", umidade: 42 },
    { id: "3", data: "14/07/2025", hora: "16:10", umidade: 47 },
    { id: "4", data: "13/07/2025", hora: "10:28", umidade: 51 },
    { id: "5", data: "12/07/2025", hora: "13:59", umidade: 49 },
    { id: "6", data: "12/07/2025", hora: "13:59", umidade: 49 },
];

export default function Logs() {
    return (
        <Container>
            <Section>
                <SectionTitle>🚿 Registros de Irrigação</SectionTitle>
                {registros.map((item) => (
                    <LogCard key={item.id}>
                        <LogInfo>
                            <LogDate>{item.data} às {item.hora}</LogDate>
                            <LogDetail>
                                <LogLabel>Umidade:</LogLabel>
                                <LogValue>{item.umidade}%</LogValue>
                            </LogDetail>
                        </LogInfo>
                    </LogCard>
                ))}
            </Section>
        </Container>
    );
};