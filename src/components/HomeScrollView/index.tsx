import React, { useState } from "react";
import { RefreshControl, ScrollViewProps } from "react-native";
import { interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import { ScrollView } from "./styles";

type Props = Pick<ScrollViewProps, "children">;

const HomeScrollView = ({ children }: Props) => {
    const theme = useTheme();

    const [isRefreshing, setIsRefreshing] = useState(false);

    function onRefresh() {
        setIsRefreshing(true);

        setTimeout(() => setIsRefreshing(false), 2000);
    }

    const scrollValue = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollValue.value = event.contentOffset.y;
    });

    const animatedBackground = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                scrollValue.value,
                [0, 200, 210],
                [theme.colors.primary[500], theme.colors.primary[500], theme.colors.neutral[0]]
            ),
        };
    });

    return (
        <ScrollView
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} tintColor="#fff" />}
            showsVerticalScrollIndicator={false}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            style={animatedBackground}
        >
            {children}
        </ScrollView>
    );
};

export default HomeScrollView;
