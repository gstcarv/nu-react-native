import { Feather } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { ChildrenContainer, Container, Divider, SectionTitle, TitleContainer } from "./styles";

type Props = {
    title: string;
    children: ReactNode;
    disableDivider?: boolean;
};

const SectionContainer = ({ title, children, disableDivider }: Props) => {
    return (
        <>
            <Container>
                <TitleContainer>
                    <SectionTitle>{title}</SectionTitle>

                    <Feather name="chevron-right" size={16} />
                </TitleContainer>

                <ChildrenContainer>{children}</ChildrenContainer>
            </Container>

            {!disableDivider && <Divider />}
        </>
    );
};

export default SectionContainer;
