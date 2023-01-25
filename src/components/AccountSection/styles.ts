import styled from "styled-components/native";
import CardButton from "../CardButton";

export const ValueText = styled.Text`
    font-family: ${({ theme: { fonts } }) => fonts.primary.medium};
    font-size: 16px;
    margin-bottom: ${({ theme: { spacing } }) => spacing["2xl"]};
`;

export const MyCardsButton = styled(CardButton)`
    margin: ${({ theme: { spacing } }) => spacing.lg}px 0;
`;
