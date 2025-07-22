import styled from "styled-components/native";

export const Container = styled.View``;

export const Section = styled.ScrollView`
    margin-bottom: 20px;
`;

export const SectionHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const SectionTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const SectionHeaderBtn = styled.TouchableOpacity`
    padding: 2px 6px;
`;

export const SectionHeaderText = styled.Text`
`;

export const LogCard = styled.View`
    background-color: #F2F3F5;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const LogInfo = styled.View``;

export const LogDate = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #2d2d2d;
    margin-bottom: 6px;
`;

export const LogDetail = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LogLabel = styled.Text`
    font-size: 14px;
    color: #555;
    margin-right: 6px;
`;

export const LogValue = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #4CAF50;
`;
