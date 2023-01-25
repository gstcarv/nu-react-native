import React, { ReactNode } from "react";
import { Container, IconContainer, Title } from "./styles";

type Props = {
    title: string;
    icon: ReactNode;
};

const MenuItem = ({ title, icon }: Props) => {
    return (
        <Container>
            <IconContainer>{icon}</IconContainer>

            <Title>{title}</Title>
        </Container>
    );
};

export default MenuItem;
