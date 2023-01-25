import React from "react";
import { ScrollView } from "react-native";
import { SubtitleText } from "../CreditCardSection/styles";
import SectionContainer from "../SectionContainer";
import FindMoreCard from "./FindMoreCard";
import { AvailableValueTitle } from "./styles";

type Props = {};

const FindMoreSection = (props: Props) => {
    return (
        <SectionContainer title="Descubra mais" disableDivider>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{ overflow: "visible" }}
            >
                <FindMoreCard />

                <FindMoreCard />

                <FindMoreCard />

                <FindMoreCard />

                <FindMoreCard />
            </ScrollView>
        </SectionContainer>
    );
};

export default FindMoreSection;
