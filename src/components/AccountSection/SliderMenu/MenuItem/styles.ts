import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    margin-right: ${({ theme: { spacing } }) => spacing.md}px;
    align-items: center;
    width: 62px;
`;

export const Title = styled.Text`
    font-family: ${({ theme: { fonts } }) => fonts.primary.medium};
    font-size: 12px;
    margin-top: ${({ theme: { spacing } }) => spacing.md}px;
    text-align: center;
`;

export const IconContainer = styled.View`
    width: 62px;
    height: 62px;
    border-radius: 99px;
    background-color: ${({ theme: { colors } }) => colors.neutral[200]};
    justify-content: center;
    align-items: center;
`;
