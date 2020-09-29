import styled from "styled-components";

export const Container = styled.div`
    padding: 32px 0;
`;

export const ShowcaseList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;

    @media screen and (max-width: 1280px) {
        margin: 0 auto;
        width: 90vw;
    }
`;

export const Showcase = styled.li`
    margin: 8px 16px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        margin: 16px;
    }
`;

export const PosterImage = styled.img`
    min-height: 210px;
    width: 140px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        min-height: 300px;
        width: 200px;
    }
`;

export const ShowcaseTitle = styled.p`
    font-size: 14px;
    margin: 8px 0 0;
    max-width: 140px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        max-width: 200px;
    }
`;
