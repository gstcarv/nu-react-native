import React from "react";
import { RefreshControl } from "react-native";
import BottomNavigator from "../../components/BottomNavigator";
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

            <BottomNavigator />
        </Container>
    );
};

export default HomeScreen;
