import { Button, Text, TouchableOpacity } from "react-native";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppRoutesList } from "../../routes/app.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProps = NativeStackNavigationProp<AppRoutesList, "Home">;

export default function Home() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <Container>
            <Button onPress={() => navigation.navigate("Dashboard")} title="Entrar em Dashboard"/>
        </Container>
    );
};