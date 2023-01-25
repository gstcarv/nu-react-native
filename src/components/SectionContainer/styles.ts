import styled from "styled-components/native";

export const Container = styled.View`
    padding: 0 ${({ theme: { spacing } }) => spacing.xl}px;
`;

export const SectionTitle = styled.Text`
    font-size: 16px;
    color: ${({ theme: { colors } }) => colors.neutral[900]};
    font-family: ${({ theme: { fonts } }) => fonts.primary.medium};
`;

export const ChildrenContainer = styled.View``;

type TitleContainerProps = {
    disableTitleMargin?: boolean;
};

export const TitleContainer = styled.View<TitleContainerProps>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme, disableTitleMargin }) => (disableTitleMargin ? 0 : theme.spacing.md)}px;
`;

export const Divider = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.neutral[200]};
    margin: ${({ theme: { spacing } }) => spacing.lg}px 0;
`;
