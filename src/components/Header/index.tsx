import { Feather } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components";
import {
    ActionButtonIcon,
    ActionButtonsContainer,
    Container,
    GreetingText,
    HeaderActionsContainer,
    ImageButtonContainer,
} from "./styles";

type Props = {};

const Header = (props: Props) => {
    const theme = useTheme();

    return (
        <Container>
            <HeaderActionsContainer>
                <ImageButtonContainer>
                    <Feather name="image" size={18} color={theme.colors.neutral[0]}></Feather>
                </ImageButtonContainer>

                <ActionButtonsContainer>
                    <ActionButtonIcon name="eye" />

                    <ActionButtonIcon name="help-circle" />
                    <ActionButtonIcon name="user-plus" />
                </ActionButtonsContainer>
            </HeaderActionsContainer>

            <GreetingText>Olá, Gustavo</GreetingText>
        </Container>
    );
};

export default Header;
