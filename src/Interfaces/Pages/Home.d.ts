declare namespace IHomePage {
    export interface IProps {}

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
