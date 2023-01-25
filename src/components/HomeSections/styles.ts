import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme: { colors } }) => colors.neutral[0]};
    padding: ${({ theme: { spacing } }) => spacing.xl}px 0;
    margin-top: ${({ theme: { spacing } }) => spacing.lg}px;
    padding-bottom: 120px;
`;
