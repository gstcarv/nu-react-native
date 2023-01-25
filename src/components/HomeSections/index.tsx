import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styles";
import AccountSection from "../AccountSection";
import CreditCardSection from "../CreditCardSection";
import FollowSection from "../FollowSection";

type Props = {};

const HomeSections = (props: Props) => {
    return (
        <Container>
            <AccountSection />

            <CreditCardSection />

            <FollowSection />
        </Container>
    );
};

export default HomeSections;
