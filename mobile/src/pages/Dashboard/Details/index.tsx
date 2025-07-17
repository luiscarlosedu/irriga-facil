import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, CardContent, CardTitle, CardValue, Container } from "./styles";

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
                    <CardTitle>Temperature</CardTitle>
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
                <FontAwesome5 name="snowflake" size={24} color="#4CAF50" />
                <CardContent>
                    <CardTitle>Hardiness</CardTitle>
                    <CardValue>10-12 (USDA)</CardValue>
                </CardContent>
            </Card>
        </Container>
    );
}