import React from "react";
import { RefreshControl } from "react-native";
import Header from "../../components/Header";
import HomeScrollView from "../../components/HomeScrollView";
import HomeSections from "../../components/HomeSections";
import { Container } from "./styles";

type Props = {};

const HomeScreen = (props: Props) => {
    return (
        <Container>
            <HomeScrollView>
                <Header />

                <HomeSections />
            </HomeScrollView>
        </Container>
    );
};

export default HomeScreen;
