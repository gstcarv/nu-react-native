import { Feather } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { ChildrenContainer, Container, Divider, SectionTitle, TitleContainer } from "./styles";

type Props = {
    title: string;
    children: ReactNode;
    disableTitleMargin?: boolean;
};

const SectionContainer = ({ title, children, disableTitleMargin }: Props) => {
    return (
        <>
            <Container>
                <TitleContainer disableTitleMargin={disableTitleMargin}>
                    <SectionTitle>{title}</SectionTitle>

                    <Feather name="chevron-right" size={16} />
                </TitleContainer>

                <ChildrenContainer>{children}</ChildrenContainer>
            </Container>
            <Divider />
        </>
    );
};

export default SectionContainer;
