import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styles";
import AccountSection from "../AccountSection";
import CreditCardSection from "../CreditCardSection";
import FollowSection from "../FollowSection";
import LoanSection from "../LoanSection";

type Props = {};

const HomeSections = (props: Props) => {
    return (
        <Container>
            <AccountSection />

            <CreditCardSection />

            <FollowSection />

            <LoanSection />
        </Container>
    );
};

export default HomeSections;
