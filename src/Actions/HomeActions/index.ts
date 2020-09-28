// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports
// #region Interface Imports
// #endregion Interface Imports

export const HomeActions = {
    Navigate: (title: string) => ({
        type: ActionConsts.Home.Navigate,
        payload: { navigatedTo: title },
    }),
};
