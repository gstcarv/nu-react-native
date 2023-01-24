import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    useFonts,
} from "@expo-google-fonts/inter";

export function useFontConfig() {
    const [fontsLoaded] = useFonts([Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold]);

    return {
        loading: !fontsLoaded,
    };
}
