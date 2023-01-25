import styled from "styled-components/native";

export const SubtitleText = styled.Text`
    font-family: ${({ theme: { fonts } }) => fonts.primary.medium};
    color: ${({ theme: { colors } }) => colors.neutral[800]};
    font-size: 10px;
`;

export const CurrentInvoiceText = styled(SubtitleText)`
    margin-top: ${({ theme: { spacing } }) => spacing.sm}px;
`;

export const InvoceValueText = styled.Text`
    font-family: ${({ theme: { fonts } }) => fonts.primary.semibold};
    color: ${({ theme: { colors } }) => colors.neutral[900]};
    font-size: 14px;
    margin: ${({ theme: { spacing } }) => spacing.sm}px 0;
`;
