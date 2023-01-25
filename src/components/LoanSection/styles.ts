import styled from "styled-components";
import { SubtitleText } from "../CreditCardSection/styles";

export const AvailableValueTitle = styled(SubtitleText)`
    margin-top: ${({ theme: { spacing } }) => spacing.sm}px;
    margin-bottom: ${({ theme: { spacing } }) => spacing.xs}px;
`;
