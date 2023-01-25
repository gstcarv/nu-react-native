import React from "react";
import { ScrollView } from "react-native";
import { valueHiddenText } from "../../config/constants";
import { useValueSettings } from "../../contexts/ValueSettingsContext";
import SectionContainer from "../SectionContainer";
import TipCard from "../TipCard";
import SliderMenu from "./SliderMenu";
import { MyCardsButton, ValueText } from "./styles";

type Props = {};

const AccountSection = (props: Props) => {
    const { showValue } = useValueSettings();

    return (
        <SectionContainer title="Conta">
            <ValueText>{showValue ? "R$ 122,57" : valueHiddenText}</ValueText>

            <SliderMenu />

            <MyCardsButton title="Meus cartões" icon="credit-card" />

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{ overflow: "visible" }}
            >
                <TipCard message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                <TipCard message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                <TipCard message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                <TipCard message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                <TipCard message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </ScrollView>
        </SectionContainer>
    );
};

export default AccountSection;
