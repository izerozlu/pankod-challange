import styled from "styled-components";

export const Container = styled.div`
    margin: 16px 0;
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

    @media screen and (max-width: 600px) {
        justify-content: center;
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
    background: url("https://via.placeholder.com/140x210?text=Feed+Image");

    @media screen and (max-width: 768px) {
        min-height: 300px;
        width: 200px;
    }

    @media screen and (max-width: 500px) {
        width: 80vw;
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

    @media screen and (max-width: 500px) {
        font-size: 24px;
    }
`;
