import { View, Text } from "react-native";
import React from "react";
import SectionContainer from "../SectionContainer";
import { CurrentInvoiceText, InvoceValueText, SubtitleText } from "./styles";
import { useTheme } from "styled-components/native";

type Props = {};

const CreditCardSection = (props: Props) => {
    const theme = useTheme();

    return (
        <SectionContainer title="Cartão de crédito">
            <CurrentInvoiceText>Fatura Atual</CurrentInvoiceText>

            <InvoceValueText>R$ 3.479,88</InvoceValueText>

            <SubtitleText style={{ marginBottom: theme.spacing["2xs"] }}>Limite dispoível de R$ 432,90</SubtitleText>
            <SubtitleText>Limite adicional para boletos: R$ 562,20</SubtitleText>
        </SectionContainer>
    );
};

export default CreditCardSection;
