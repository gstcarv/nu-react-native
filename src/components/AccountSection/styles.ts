import styled from "styled-components/native";

export const ValueText = styled.Text`
    font-family: ${({ theme: { fonts } }) => fonts.primary.medium};
    font-size: 16px;
    margin-bottom: ${({ theme: { spacing } }) => spacing["2xl"]};
`;
