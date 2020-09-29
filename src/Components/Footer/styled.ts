// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.footer`
    background: ${({ theme }) => theme.colors.accent};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e0e0e0;
    padding: ${({ theme }) => theme.padding.large} 0;

    @media screen and (max-width: 1280px) {
        padding: ${({ theme }) => theme.padding.large};
    }
`;

export const SiteMap = styled.ul`
    background: ${({ theme }) => theme.colors.accent};
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.padding.medium} 0;
    margin: 0;

    @media screen and (max-width: 850px) {
        flex-wrap: wrap;
    }
`;

export const MapAnchor = styled.a`
    padding: ${({ theme }) => theme.padding.small}
        ${({ theme }) => theme.padding.medium}
        ${({ theme }) => theme.padding.small} 0;
    color: inherit;
    white-space: nowrap;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const MapItem = styled.li`
    list-style: none;
    position: relative;
    margin-right: ${({ theme }) => theme.padding.medium};

    &:not(:last-child):after {
        height: 16px;
        width: 1px;
        background: #e0e0e0;
        content: ".";
        color: transparent;
        display: block;
        position: absolute;
        right: 0;
        top: 4px;
    }

    &:first-child ${MapAnchor} {
        padding-left: 0;
    }
`;

export const Statement = styled.p`
    font-weight: 300;
    margin: 0 0 ${({ theme }) => theme.padding.xLarge};
`;

export const Links = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Image = styled.img<{ height?: string; width?: string }>`
    height: ${({ height }: { height?: string }) => height || "32px"};
    width: ${({ width }: { width?: string }) => width || "32px"};

    &:not(:last-child) {
        margin-right: ${({ theme }) => theme.padding.medium};
    }
`;
