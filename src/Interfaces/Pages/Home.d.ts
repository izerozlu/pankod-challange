// #region Global Imports
import { WithTranslation } from "next-i18next";
// #endregion Global Imports

declare namespace IHomePage {
    export interface IProps extends WithTranslation {}

    export interface InitialProps {
        namespacesRequired: string[];
    }

    export interface IStateProps {
        navigatedTo: string;
    }

    namespace Actions {
        export interface IMapPayload {
            navigatedTo: string;
        }

        export interface IMapResponse {}
    }
}

export { IHomePage };
