import styled from "styled-components/native";

type StatusType = "Alta" | "Moderada" | "Baixa";

export const Container = styled.ScrollView``;

export const Section = styled.View`
    margin-bottom: 24px;
`;

export const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

export const SectionTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 4px;
    color: #333;
    width: 100%;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const Label = styled.Text`
    font-size: 14px;
    color: #555;
`;

export const Value = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #222;
`;

export const ImagePlant = styled.Image`
    width: 100%;
    height: 160px;
    border-radius: 12px;
    margin-bottom: 8px;
`;

export const MoistureCard = styled.View<{ status: StatusType }>`
    background-color: ${({ status }) =>
      status === "Alta"
        ? "#E3F2FD"
        : status === "Moderada"
        ? "#E8F5E9"
        : "#FBE9E7"};

    border-left-width: 5px;
    border-left-color: ${({ status }) =>
      status === "Alta"
        ? "#2196F3"
        : status === "Moderada"
        ? "#4CAF50"
        : "#FF5722"};

    padding: 16px;
    border-radius: 12px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MoistureInfo = styled.View``;

export const MoistureValue = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
`;

export const MoistureStatus = styled.Text<{ status: StatusType }>`
    font-size: 14px;
    font-weight: bold;
    color: ${({ status }) =>
      status === "Alta"
        ? "#2196F3"
        : status === "Moderada"
        ? "#4CAF50"
        : "#FF5722"};
`;

export const MoistureIcon = styled.View`
    margin-left: 10px;
`;

export const ButtonRow = styled.View`
    gap: 8px;
    margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #4caf50;
    padding: 12px 20px;
    border-radius: 8px;
    margin-right: 10px;
    width: 100%;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    gap: 4px;
`;

export const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
`;
