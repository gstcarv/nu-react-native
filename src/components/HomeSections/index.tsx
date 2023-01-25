import React from "react";
import { Container } from "./styles";
import AccountSection from "../AccountSection";
import CreditCardSection from "../CreditCardSection";
import FollowSection from "../FollowSection";
import LoanSection from "../LoanSection";
import FindMoreSection from "../FindMoreSection";

type Props = {};

const HomeSections = (props: Props) => {
    return (
        <Container>
            <AccountSection />

            <CreditCardSection />

            <FollowSection />

            <LoanSection />

            <FindMoreSection />
        </Container>
    );
};

export default HomeSections;
