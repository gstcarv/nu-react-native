import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme: { colors } }) => colors.primary[500]};
    flex: 1%;
`;
