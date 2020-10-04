import * as React from "react";
import {
    Container,
    Image,
    LinkContainer,
    Links,
    MapAnchor,
    MapItem,
    SiteMap,
    Statement,
} from "@Components/Footer/styled";
import { InnerContainer } from "@Styled/Shared";
import { IFooter } from "./Footer";

const Footer: React.FunctionComponent<IFooter.IProps> = (): JSX.Element => {
    /**
     * Constructs the JSX counterparts of the site map entries.
     * @returns JSX counterparts.
     */
    const renderSiteMapItems = (): JSX.Element[] => {
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

    /**
     * Constructs the JSX counterparts of the social media links.
     * @returns JSX counterparts.
     */
    const renderSocialMediaImages = (): JSX.Element[] => {
        return [
            "static/images/social-media/facebook-white.svg",
            "static/images/social-media/twitter-white.svg",
            "static/images/social-media/instagram-white.svg",
        ].map((source: string) => <Image src={source} key={source} />);
    };

    /**
     * Constructs the JSX counterparts of the mobile application links.
     * @returns JSX counterparts.
     */
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
                <SiteMap>{renderSiteMapItems()}</SiteMap>
                <Statement>
                    Copyright © 2016 DEMO Streaming. All Rights Reserved.
                </Statement>
                <LinkContainer className="links">
                    <Links className="links__social-media">
                        {renderSocialMediaImages()}
                    </Links>
                    <Links className="links__store">
                        {renderStoreImages()}
                    </Links>
                </LinkContainer>
            </InnerContainer>
        </Container>
    );
};

export { Footer };
