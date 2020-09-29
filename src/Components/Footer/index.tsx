// #region Global Imports
import * as React from "react";
// #endregion Global Imports
// #region Local Imports
import {
    Container,
    Image,
    InnerContainer,
    LinkContainer,
    Links,
    MapAnchor,
    MapItem,
    SiteMap,
    Statement,
} from "@Components/Footer/styled";
import { IFooter } from "./Footer";
// #endregion Local Imports

const Footer: React.FunctionComponent<IFooter.IProps> = (): JSX.Element => {
    const renderMapItems = (): JSX.Element[] => {
        return [
            "Home",
            "Terms and Conditions",
            "Privacy Policy",
            "Collection Statement",
            "Help",
            "Manage Account",
        ].map((text: string) => {
            return (
                <MapItem key={text}>
                    <MapAnchor href="https://pankod.com/" target="_blank">
                        {text}
                    </MapAnchor>
                </MapItem>
            );
        });
    };

    const renderSocialMediaImages = (): JSX.Element[] => {
        return [
            "static/images/social-media/facebook-white.svg",
            "static/images/social-media/twitter-white.svg",
            "static/images/social-media/instagram-white.svg",
        ].map((source: string) => <Image src={source} key={source} />);
    };

    const renderStoreImages = (): JSX.Element[] => {
        return [
            "static/images/store/app-store.svg",
            "static/images/store/play-store.svg",
            "static/images/store/windows-store.svg",
        ].map((source: string) => (
            <Image src={source} width="auto" height="48px" key={source} />
        ));
    };

    return (
        <Container>
            <InnerContainer>
                <SiteMap>{renderMapItems()}</SiteMap>
                <Statement>
                    Copyright © 2016 DEMO Streaming. All Rights Reserved.
                </Statement>
                <LinkContainer>
                    <Links>{renderSocialMediaImages()}</Links>
                    <Links>{renderStoreImages()}</Links>
                </LinkContainer>
            </InnerContainer>
        </Container>
    );
};

export { Footer };
