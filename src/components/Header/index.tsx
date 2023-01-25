import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import { useTheme } from "styled-components";
import { useValueSettings } from "../../contexts/ValueSettingsContext";
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
    const { showValue, toggleValue } = useValueSettings();

    return (
        <Container>
            <HeaderActionsContainer>
                <ImageButtonContainer>
                    <Feather name="image" size={18} color={theme.colors.neutral[0]}></Feather>
                </ImageButtonContainer>

                <ActionButtonsContainer>
                    <Pressable onPress={toggleValue}>
                        <ActionButtonIcon name={showValue ? "eye-off" : "eye"} />
                    </Pressable>

                    <ActionButtonIcon name="help-circle" />
                    <ActionButtonIcon name="user-plus" />
                </ActionButtonsContainer>
            </HeaderActionsContainer>

            <GreetingText>Olá, Gustavo</GreetingText>
        </Container>
    );
};

export default Header;
