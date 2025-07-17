import React, { useEffect, useState } from 'react';
import {
    Container,
    ContentScrollView,
    ImagePlant,
    InfoView,
    ViewImage,
    Title,
    TabList,
    Tab,
    CardsContainer,
    Card,
    CardTitle,
    CardValue,
    SaveButton,
    SaveButtonText,
    CardContent,
    TabText,
} from './styles';
import axios from 'axios';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import OverView from './OverView';
import Detail from './Details';
import About from './About';
import Problems from './Problems';
import Logs from './Logs';

type TabOption = 'overview' | 'logs' | 'details' | 'about' | 'problems';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<TabOption>('overview');
    const [temperature, setTemperature] = useState("");

    async function loadTemperature(city: string) {
        try {
            const key = '909aaf292fb54c1a823164741251407';
            const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
 
            const response = await axios.get(url);
            const tempC = response.data.current.temp_c;
            setTemperature(`${tempC}°C`);
        } catch (error) {
            console.error("Erro ao buscar temperatura:", error);
            setTemperature("Erro");
        }
    };

    useEffect(() => {
        loadTemperature("Tauá-Ceará");
    }, []);

    return (
        <Container>
            <ContentScrollView showsVerticalScrollIndicator={false}>
                <ViewImage>
                    <ImagePlant source={{ uri: 'https://images.tcdn.com.br/img/img_prod/665728/suporte_anel_para_trelica_gancho_vaso_autoirrigavel_15cm_1325_4_b527aeffc8cafdf458dd6b9b25e201a8.jpeg' }} />
                </ViewImage>

                <InfoView>
                    <Title>Monstera Deliciosa</Title>

                    <TabList>
                        <Tab active={activeTab === 'overview'} onPress={() => setActiveTab('overview')}>
                            <TabText active={activeTab === 'overview'}>Visão Geral</TabText>
                        </Tab>

                        <Tab active={activeTab === 'logs'} onPress={() => setActiveTab('logs')}>
                            <TabText active={activeTab === 'logs'}>Registros</TabText>
                        </Tab>

                        <Tab active={activeTab === 'details'} onPress={() => setActiveTab('details')}>
                            <TabText active={activeTab === 'details'}>Detalhes</TabText>
                        </Tab>

                        <Tab active={activeTab === 'about'} onPress={() => setActiveTab('about')}>
                            <TabText active={activeTab === 'about'}>Sobre</TabText>
                        </Tab>

                        <Tab active={activeTab === 'problems'} onPress={() => setActiveTab('problems')}>
                            <TabText active={activeTab === 'problems'}>Problemas</TabText>
                        </Tab>
                    </TabList>
                    
                    {activeTab === 'overview' && <OverView />}
                    {activeTab === 'logs' && <Logs />}
                    {activeTab === 'details' && <Detail temperature={temperature} />}
                    {activeTab === 'about' && <About />}
                    {activeTab === 'problems' && <Problems />}

                    {/* <SaveButton>
                        <SaveButtonText>Save to My Plants</SaveButtonText>
                    </SaveButton> */}
                </InfoView>
            </ContentScrollView>
        </Container>
    );
}
