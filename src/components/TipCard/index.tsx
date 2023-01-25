import React from "react";
import { Container, Message } from "./styles";

type Props = {
    message: string;
};

const TipCard = ({ message }: Props) => {
    return (
        <Container>
            <Message>{message}</Message>
        </Container>
    );
};

export default TipCard;
