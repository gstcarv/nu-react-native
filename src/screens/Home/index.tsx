import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Container } from "./styles";
import Header from "../../components/Header";

type Props = {};

const HomeScreen = (props: Props) => {
    return (
        <Container>
            <SafeAreaView>
                <ScrollView>
                    <Header />
                </ScrollView>
            </SafeAreaView>
        </Container>
    );
};

export default HomeScreen;
