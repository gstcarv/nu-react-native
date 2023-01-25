import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme: { colors } }) => colors.neutral[200]};
    width: 200px;
    margin-right: ${({ theme: { spacing } }) => spacing.md}px;
    border-radius: 8px;
    overflow: hidden;
`;

export const ImageContainer = styled.View`
    height: 104px;
    background-color: gray;
`;

export const Image = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

export const CardBody = styled.View`
    padding: ${({ theme: { spacing } }) => spacing.lg}px;
`;

export const CardTitle = styled.Text`
    font-family: ${({ theme: { fonts } }) => fonts.primary.medium};
    color: ${({ theme: { colors } }) => colors.neutral[900]};
    font-size: 12px;
`;

export const CardDescription = styled.Text`
    font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
    color: ${({ theme: { colors } }) => colors.neutral[800]};
    font-size: 12px;
    margin: ${({ theme: { spacing } }) => spacing.sm}px 0;
`;

export const ActionButton = styled.View`
    background-color: ${({ theme: { colors } }) => colors.primary[500]};
    align-self: flex-start;
    padding: ${({ theme: { spacing } }) => spacing.sm}px ${({ theme: { spacing } }) => spacing.md}px;
    border-radius: 99px;
    margin-top: ${({ theme: { spacing } }) => spacing.xs}px;
`;

export const ActionButtonText = styled.Text`
    font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
    color: ${({ theme: { colors } }) => colors.neutral[0]};
    font-size: 12px;
`;
