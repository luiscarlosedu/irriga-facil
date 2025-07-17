import styled from 'styled-components/native';

export const Container = styled.View`
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