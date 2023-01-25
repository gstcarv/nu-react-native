import styled from "styled-components/native";
import Constants from "expo-constants";
import { spacing } from "../../config/theme/spacing";

export const Container = styled.View`
    padding-top: ${Constants.statusBarHeight + spacing.lg}px;
    background-color: ${({ theme: { colors } }) => colors.primary[500]};
    flex: 1;
`;
