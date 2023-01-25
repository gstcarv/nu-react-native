import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    flex-direction: row;
    background: ${({ theme: { colors } }) => colors.neutral[200]};
    align-items: center;
    border-radius: 12px;
    padding: ${({ theme: { spacing } }) => spacing.lg}px ${({ theme: { spacing } }) => spacing.lg}px;
    margin-right: ${({ theme: { spacing } }) => spacing.md}px;
    width: 300px;
`;

export const Message = styled.Text`
    font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
    color: ${({ theme: { colors } }) => colors.neutral[800]};
    font-size: 10px;
    width: 80%;
    line-height: 18px;
`;
