import { View, Text } from "react-native";
import React from "react";
import SectionContainer from "../SectionContainer";
import { CurrentInvoiceText, InvoceValueText, SubtitleText } from "./styles";
import { useTheme } from "styled-components/native";
import { useValueSettings } from "../../contexts/ValueSettingsContext";
import { valueHiddenText } from "../../config/constants";

type Props = {};

const CreditCardSection = (props: Props) => {
    const theme = useTheme();
    const { showValue } = useValueSettings();

    return (
        <SectionContainer title="Cartão de crédito">
            <CurrentInvoiceText>Fatura Atual</CurrentInvoiceText>

            <InvoceValueText>{showValue ? "R$ 3.479,88" : valueHiddenText}</InvoceValueText>

            <SubtitleText style={{ marginBottom: theme.spacing["2xs"] }}>
                Limite dispoível de {showValue ? "R$ 432,90" : valueHiddenText}
            </SubtitleText>
            <SubtitleText>Limite adicional para boletos: {showValue ? "R$ 562,20" : valueHiddenText}</SubtitleText>
        </SectionContainer>
    );
};

export default CreditCardSection;
