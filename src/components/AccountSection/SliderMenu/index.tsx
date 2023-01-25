import React from "react";
import { ScrollView, Text } from "react-native";
import { useTheme } from "styled-components/native";
import MenuItem from "./MenuItem";

import { FontAwesome5, FontAwesome, Feather } from "@expo/vector-icons";

type Props = {};

const SliderMenu = (props: Props) => {
    const theme = useTheme();

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{ overflow: "visible" }}
        >
            <MenuItem
                title="Pagar"
                icon={<FontAwesome5 name="barcode" size={18} color={theme.colors.neutral[900]} />}
            />

            <MenuItem
                title="Transferir"
                icon={<FontAwesome name="money" size={18} color={theme.colors.neutral[900]} />}
            />

            <MenuItem
                title="Depositar"
                icon={<FontAwesome name="money" size={18} color={theme.colors.neutral[900]} />}
            />

            <MenuItem
                title="Cobrar"
                icon={<Feather name="message-square" size={18} color={theme.colors.neutral[900]} />}
            />

            <MenuItem
                title="Recarga de celular"
                icon={<Feather name="smartphone" size={18} color={theme.colors.neutral[900]} />}
            />

            <MenuItem
                title="Transferir Internac."
                icon={<Feather name="globe" size={18} color={theme.colors.neutral[900]} />}
            />

            <MenuItem title="Doação" icon={<Feather name="heart" size={18} color={theme.colors.neutral[900]} />} />

            <MenuItem
                title="Investir"
                icon={<Feather name="bar-chart" size={18} color={theme.colors.neutral[900]} />}
            />

            <MenuItem title="Caixinhas" icon={<Feather name="box" size={18} color={theme.colors.neutral[900]} />} />
        </ScrollView>
    );
};

export default SliderMenu;
