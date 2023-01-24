import "styled-components";
import { theme } from "../theme";

interface IPalette {
    main: string;
    contrastText: string;
}

declare module "styled-components" {
    type AppTheme = typeof theme;

    export interface DefaultTheme extends AppTheme {}
}
