import styled from "styled-components/native";

export const Container = styled.View`
    padding: 0 ${({ theme: { spacing } }) => spacing.xl}px;
`;

export const SectionTitle = styled.Text`
    font-size: 14px;
    color: ${({ theme: { colors } }) => colors.neutral[900]};
    font-family: ${({ theme: { fonts } }) => fonts.primary.medium};
`;

export const ChildrenContainer = styled.View``;

export const TitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const Divider = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.neutral[200]};
    margin: ${({ theme: { spacing } }) => spacing.lg}px 0;
`;
