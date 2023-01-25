import React from "react";
import { ViewProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = {
    title: string;
    icon: string;
} & Pick<ViewProps, "style">;

const CardButton = ({ title, icon, style }: Props) => {
    return (
        <Container style={style}>
            <Icon name={icon} />

            <Title>{title}</Title>
        </Container>
    );
};

export default CardButton;
