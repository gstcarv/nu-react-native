import React from "react";
import CardButton from "../CardButton";
import SectionContainer from "../SectionContainer";

type Props = {};

const FollowSection = (props: Props) => {
    return (
        <SectionContainer title="Acompanhe também">
            <CardButton title="Assistente de pagamentos" icon="repeat"></CardButton>
        </SectionContainer>
    );
};

export default FollowSection;
