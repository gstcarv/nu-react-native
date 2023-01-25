import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    flex-direction: row;
    height: 46px;
    background: ${({ theme: { colors } }) => colors.neutral[200]};
    align-items: center;
    border-radius: 12px;
    padding: 0 ${({ theme: { spacing } }) => spacing.lg}px;
    margin: ${({ theme: { spacing } }) => spacing.lg}px 0;
`;

export const Icon = styled(Feather)`
    margin-right: ${({ theme: { spacing } }) => spacing.lg}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme: { fonts } }) => fonts.primary.medium};
    font-size: 12px;
`;
