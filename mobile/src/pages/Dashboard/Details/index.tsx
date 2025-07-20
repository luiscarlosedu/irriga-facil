import { Feather, FontAwesome5, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, CardContent, CardTitle, CardTotal, CardValue, Container } from "./styles";

interface DetailProps {
    temperature: string;
}

export default function Detail({ temperature }: DetailProps) {
    return (
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
                    <CardValue>{temperature}</CardValue>
                </CardContent>
            </Card>

            <Card>
                <MaterialCommunityIcons name="water" size={24} color="#4CAF50" />
                <CardContent>
                    <CardTitle>Umidade</CardTitle>
                    <CardValue>Alta</CardValue>
                </CardContent>
            </Card>

            <Card>
                <FontAwesome6 name="plant-wilt" size={24} color="#4CAF50" />
                <CardContent>
                    <CardTitle>Umidade da Planta</CardTitle>
                    <CardValue>15%</CardValue>
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
    );
}