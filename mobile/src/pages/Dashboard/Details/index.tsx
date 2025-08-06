import { Feather, FontAwesome5, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, CardContent, CardTitle, CardTotal, CardValue, Container, ContainerLoading } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { ActivityIndicator } from "react-native";

interface DetailProps {
    temperature: string;
}

const calcularUmidade = (valor: number): number => {
    return Math.max(0, Math.min(100, 100 - Math.round((valor / 1023) * 100)));
};

export default function Detail({ temperature }: DetailProps) {
    const [leituraSensor, setLeituraSensor] = useState<number>(0);
    const umidade = calcularUmidade(leituraSensor);
    const [loading, setLoading] = useState(true);

    const getStatusUmidade = (): "Alta" | "Moderada" | "Baixa" => {
        if (umidade >= 70) return "Alta";
        if (umidade >= 40) return "Moderada";
        return "Baixa";
    };

    const status = getStatusUmidade();

    async function loadMoisture() {
        setLoading(true);
        try {
            const response = await api.get("/moisture");
            setLeituraSensor(response.data.umidade);
        } catch (err) {
            console.log("[ERRO]");
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        loadMoisture();
    }, []);

    return (
        loading ? (
            <ContainerLoading>
                <ActivityIndicator size="large" color="#4CAF50" style={{ marginTop: 32 }} />
            </ContainerLoading>
        ) : (
            <Container>
                <Card>
                    <MaterialCommunityIcons name="leaf" size={24} color="#4CAF50" />
                    <CardContent>
                        <CardTitle>Tipo</CardTitle>
                        <CardValue>Foliage Plant</CardValue>
                    </CardContent>
                </Card>

                <Card>
                    <FontAwesome5 name="temperature-low" size={24} color="#4CAF50" />
                    <CardContent>
                        <CardTitle>Temperatura</CardTitle>
                        <CardValue>{temperature}°</CardValue>
                    </CardContent>
                </Card>

                <Card>
                    <MaterialCommunityIcons name="water" size={24} color="#4CAF50" />
                    <CardContent>
                        <CardTitle>Umidade</CardTitle>
                        <CardValue>
                            {status === "Alta"
                                ? "Alta"
                                : status === "Moderada"
                                ? "Moderada"
                                : "Baixa"
                            }
                        </CardValue>
                    </CardContent>
                </Card>

                <Card>
                    <FontAwesome6 name="plant-wilt" size={24} color="#4CAF50" />
                    <CardContent>
                        <CardTitle>Sensor - Planta</CardTitle>
                        <CardValue>{umidade}%</CardValue>
                    </CardContent>
                </Card>

                <Card>
                    <MaterialCommunityIcons name="water" size={24} color="#4CAF50" />
                    <CardContent>
                    <CardTitle>Umidade Ideal</CardTitle>
                    <CardValue>40% a 70%</CardValue>
                    </CardContent>
                </Card>

                <Card>
                    <MaterialCommunityIcons name="calendar-week" size={24} color="#4CAF50" />
                    <CardContent>
                        <CardTitle>Frequência</CardTitle>
                        <CardValue>1 vez por semana</CardValue>
                    </CardContent>
                </Card>

                <CardTotal>
                    <Feather name="info" size={24} color="#4CAF50" />
                    <CardContent>
                        <CardTitle>Observação</CardTitle>
                        <CardValue>Evite encharcar o solo.</CardValue>
                    </CardContent>
                </CardTotal>
            </Container>
        )
    );
}