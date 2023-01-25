import React from "react";
import {
    ActionButton,
    ActionButtonText,
    CardBody,
    CardDescription,
    CardTitle,
    Container,
    Image,
    ImageContainer,
} from "./styles";

type Props = {};

const FindMoreCard = (props: Props) => {
    return (
        <Container>
            <ImageContainer>
                <Image source={{ uri: "https://picsum.photos/300/200" }} />
            </ImageContainer>

            <CardBody>
                <CardTitle>Indique o Nu para amigos</CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardDescription>

                <ActionButton>
                    <ActionButtonText>Indicar amigos</ActionButtonText>
                </ActionButton>
            </CardBody>
        </Container>
    );
};

export default FindMoreCard;
