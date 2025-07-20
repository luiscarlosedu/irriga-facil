import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #fff;
    margin-bottom: 40px;
    padding-inline: 7px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #2d2d2d;
    margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
    font-weight: bold;
    color: #4CAF50;
`;

export const Paragraph = styled.Text`
    font-size: 15px;
    color: #444;
    margin-bottom: 12px;
    line-height: 22px;
    text-align: justify;
`;

export const Divider = styled.View`
    height: 1px;
    background-color: #e0e0e0;
    margin: 20px 0;
`;

export const TipList = styled.View`
    margin-top: 10px;
`;

export const TipItem = styled.View`
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 6px;
`;

export const TipBullet = styled.Text`
    font-size: 15px;
    margin-right: 6px;
    color: #4CAF50;
`;

export const TipText = styled.Text`
    flex: 1;
    font-size: 15px;
    color: #444;
`;
