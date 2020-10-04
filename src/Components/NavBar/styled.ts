import styled from "styled-components";
import { InnerContainer } from "@Styled/Shared";

export const Container = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px;
    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    z-index: 300;
`;

// @ts-ignore
export const NavBarInnerContainer = styled(InnerContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    color: white;
    font-weight: bold;
    margin: 0;
    cursor: pointer;
`;

export const Utilities = styled.div`
    display: flex;
    align-items: center;

    > .utilities__log-in-button {
        margin-right: 16px;
    }
`;
