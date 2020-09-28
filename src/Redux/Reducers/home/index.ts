// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IHomePage } from "@Interfaces";
// #endregion Interface Imports

type IMapPayload = IHomePage.Actions.IMapPayload;

export const HomeReducer = (state = {}, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.Home.Navigate:
            return { navigatedTo: action.payload?.navigatedTo };

        default:
            return state;
    }
};
