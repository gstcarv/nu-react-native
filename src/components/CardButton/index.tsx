import React from "react";
import { Container, Icon, Title } from "./styles";

type Props = {
    title: string;
    icon: string;
};

const CardButton = ({ title, icon }: Props) => {
    return (
        <Container>
            <Icon name={icon} />

            <Title>{title}</Title>
        </Container>
    );
};

export default CardButton;
