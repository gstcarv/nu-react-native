import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    padding-horizontal: ${({ theme: { spacing } }) => spacing.xl}px;
`;

export const HeaderActionsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ImageButtonContainer = styled.View`
    height: 36px;
    width: 36px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 99px;
    justify-content: center;
    align-items: center;
`;

export const ActionButtonsContainer = styled.View`
    flex-direction: row;
`;

export const ActionButtonIcon = styled(Feather).attrs({
    size: 18,
})`
    color: ${({ theme }) => theme.colors.neutral[0]};
    margin-left: ${({ theme: { spacing } }) => spacing.lg}px;
`;

export const GreetingText = styled.Text`
    color: ${({ theme: { colors } }) => colors.neutral[0]};
    font-size: 14px;
    font-family: ${({ theme: { fonts } }) => fonts.primary.semibold};
    margin-top: ${({ theme: { spacing } }) => spacing.xl};
`;
