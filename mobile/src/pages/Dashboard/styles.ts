import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #f6f6f6;
    width: 100%;
`;

export const ContentScrollView = styled.ScrollView`
    
`;

export const ViewImage = styled.View`
    width: 100%;
    height: 300px;
    display: flex;
`;

export const ImagePlant = styled.Image`
    width: 100%;
    height: 100%;
    /* border-bottom-left-radius: 16px; */
    /* border-bottom-right-radius: 16px; */
`;

export const InfoView = styled.View`
    margin-top: -20px;
    background-color: white;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding: 20px;
    height: 100%;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #2d2d2d;
`;

export const TabList = styled.View`
    flex-direction: row;
    margin-bottom: 20px;
`;

export const Tab = styled.TouchableOpacity<{ active: boolean }>`
    margin-right: 16px;
    padding-bottom: 4px;
    border-bottom-width: 2px;
    border-color: ${({ active }) => (active ? '#4CAF50' : 'transparent')};
`;

export const TabText = styled.Text<{ active: boolean }>`
    font-weight: bold;
    color: ${({ active }) => (active ? '#4CAF50' : '#999')};
    font-size: 14px;
`;

export const CardsContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

export const Card = styled.View`
    background-color: #f0f0f0;
    width: 48%;
    padding: 10px;
    border-radius: 12px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const CardContent = styled.View`
    display: flex;
`;

export const CardTitle = styled.Text`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 2px;
`;

export const CardValue = styled.Text`
    font-size: 13px;
    color: #444;
`;

export const SaveButton = styled.TouchableOpacity`
    margin-top: 20px;
    background-color: #4CAF50;
    padding: 15px;
    border-radius: 12px;
    align-items: center;
`;

export const SaveButtonText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
`;
