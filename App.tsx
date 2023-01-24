import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { useFontConfig } from "./src/config/hooks/useFontConfig";
import { theme } from "./src/config/theme";
import HomeScreen from "./src/screens/Home";

export default function App() {
    const { loading: isLoadingFonts } = useFontConfig();

    if (isLoadingFonts) {
        return null;
    }

    return (
        <>
            <StatusBar animated style="light" />
            <ThemeProvider theme={theme}>
                <HomeScreen />
            </ThemeProvider>
        </>
    );
}
