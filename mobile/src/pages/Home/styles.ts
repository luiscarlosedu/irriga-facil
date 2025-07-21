import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    flex: 1;
    background-color: #f6f6f6;
    width: 100%;
`;

export const ContentScrollView = styled.ScrollView``;

export const ImageView = styled.View`
    width: 100%;
    height: 450px;
`;

export const ImageHome = styled.Image`
    width: 100%;
    height: 100%;
`;

export const InfoView = styled.View`
    margin-top: -40px;
    background-color: white;
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;
    padding: 25px;
    gap: 12px;
    width: 100%;
    min-height: 100%;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #2d2d2d;
`;

export const SubTitle = styled.Text`
    font-size: 15px;
    text-align: center;
    color: #666;
    line-height: 22px;
`;

export const Divider = styled.View`
    height: 1px;
    background-color: #e0e0e0;
    margin: 12px 0;
`;

export const SectionTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #4caf50;
    margin-bottom: 8px;
`;

export const FeatureBox = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;

export const FeatureIcon = styled.View``;

export const FeatureText = styled.Text`
    flex: 1;
    font-size: 14px;
    color: #444;
`;

export const GetStartedButton = styled.TouchableOpacity`
    background-color: #4caf50;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    padding: 14px;
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const GetStartedText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-right: 8px;
`;

export const ArrowIcon = styled(Feather)`
    margin-top: 1px;
`;
