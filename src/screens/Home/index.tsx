import { View, Text, ScrollView, SafeAreaView, RefreshControl } from "react-native";
import React, { useState } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import HomeSections from "../../components/HomeSections";

type Props = {};

const HomeScreen = (props: Props) => {
    const [isRefreshing, setIsRefreshing] = useState(false);

    function onRefresh() {
        setIsRefreshing(true);

        setTimeout(() => setIsRefreshing(false), 2000);
    }

    return (
        <Container>
            <SafeAreaView>
                <ScrollView
                    refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} tintColor="#fff" />}
                    showsVerticalScrollIndicator={false}
                >
                    <Header />

                    <HomeSections />
                </ScrollView>
            </SafeAreaView>
        </Container>
    );
};

export default HomeScreen;
