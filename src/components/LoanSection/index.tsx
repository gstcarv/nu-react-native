import React from "react";
import { valueHiddenText } from "../../config/constants";
import { useValueSettings } from "../../contexts/ValueSettingsContext";
import { SubtitleText } from "../CreditCardSection/styles";
import SectionContainer from "../SectionContainer";
import { AvailableValueTitle } from "./styles";

type Props = {};

const LoanSection = (props: Props) => {
    const { showValue } = useValueSettings();

    return (
        <SectionContainer title="Empréstimo">
            <AvailableValueTitle>Valor disponível de até</AvailableValueTitle>
            <SubtitleText>{showValue ? "R$ 25.000,00" : valueHiddenText}</SubtitleText>
        </SectionContainer>
    );
};

export default LoanSection;
