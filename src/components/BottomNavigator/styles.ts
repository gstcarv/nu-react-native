import { BlurView } from "expo-blur";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const FloatedContainer = styled(SafeAreaView)`
    position: absolute;
    bottom: 0;
    align-self: center;
`;

export const Wrapper = styled(View)`
    border-radius: 100px;
    overflow: hidden;
    height: 48px;
    width: 164px;
    background-color: rgba(255, 255, 255, 0.8);
`;

export const BlurContainer = styled(BlurView)`
    flex: 1;
    flex-direction: row;
    padding: ${({ theme: { spacing } }) => spacing["2xs"]}px;
`;

type NavigationItemsProps = {
    active?: boolean;
};

export const NavigationItem = styled.View<NavigationItemsProps>`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme: { colors }, active }) => (active ? colors.primary[100] : "transparent")};
    border-radius: 100px;
`;

export const NavigationItemIcon = styled(Feather).attrs<NavigationItemsProps>({
    size: 18,
})<NavigationItemsProps>`
    color: ${({ theme: { colors }, active }) => (active ? colors.primary[500] : colors.neutral[800])};
`;