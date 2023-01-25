import React from "react";
import { SubtitleText } from "../CreditCardSection/styles";
import SectionContainer from "../SectionContainer";
import { AvailableValueTitle } from "./styles";

type Props = {};

const LoanSection = (props: Props) => {
    return (
        <SectionContainer title="Empréstimo">
            <AvailableValueTitle>Valor disponível de até</AvailableValueTitle>
            <SubtitleText>R$ 25.000,00</SubtitleText>
        </SectionContainer>
    );
};

export default LoanSection;
