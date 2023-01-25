import React from "react";
import { SafeAreaView, Text } from "react-native";
import { colors } from "../../config/theme/colors";
import { BlurContainer, FloatedContainer, NavigationItem, NavigationItemIcon, Wrapper } from "./styles";

type Props = {};

const BottomNavigator = (props: Props) => {
    return (
        <FloatedContainer
            style={{
                shadowColor: colors.neutral[900],
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.15,
                shadowRadius: 10,

                elevation: 5,
            }}
        >
            <Wrapper>
                <BlurContainer intensity={20} tint="light">
                    <NavigationItem active>
                        <NavigationItemIcon name="home" active />
                    </NavigationItem>

                    <NavigationItem>
                        <NavigationItemIcon name="dollar-sign" />
                    </NavigationItem>

                    <NavigationItem>
                        <NavigationItemIcon name="shopping-bag" />
                    </NavigationItem>
                </BlurContainer>
            </Wrapper>
        </FloatedContainer>
    );
};

export default BottomNavigator;
