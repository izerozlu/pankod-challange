// #region Global Imports
import "styled-components";
// #endregion Global Imports

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            accent: string;
        };
        padding: {
            xLarge: string;
            large: string;
            medium: string;
            small: string;
        };
    }
}
