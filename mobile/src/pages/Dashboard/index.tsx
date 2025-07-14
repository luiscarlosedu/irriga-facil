import { Container, ContentScrollView, ImagePlant, InfoView, ViewImage } from "./styles";

export default function Dashboard() {
    return (
        <Container>
            <ContentScrollView
                showsVerticalScrollIndicator={false}
            >
                <ViewImage>
                    <ImagePlant source={{ uri: 'https://images.tcdn.com.br/img/img_prod/665728/suporte_anel_para_trelica_gancho_vaso_autoirrigavel_15cm_1325_4_b527aeffc8cafdf458dd6b9b25e201a8.jpeg' }} />
                </ViewImage>

                <InfoView>
                    <p>Oláaa!!!!</p>
                </InfoView>
            </ContentScrollView>
        </Container>
    );
};