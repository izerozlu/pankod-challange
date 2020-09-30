// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports

const theme: DefaultTheme = {
    colors: {
        primary: "#1E88E5",
        accent: "#424242",
    },
    padding: {
        xLarge: "48px",
        large: "32px",
        medium: "16px",
        small: "8px",
    },
    boxShadows: {
        low:
            "0px 2px 2px 0px rgba(0,0,0,0.14) , 0px 3px 1px -2px rgba(0,0,0,0.12) , 0px 1px 5px 0px rgba(0,0,0,0.2)",
        medium:
            "0px 2px 5px 0px rgba(0,0,0,0.14) , 0px 1px 10px 0px rgba(0,0,0,0.12) , 0px 2px 4px -1px rgba(0,0,0,0.2)",
    },
};

export { theme };
