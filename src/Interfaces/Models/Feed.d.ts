export interface FeedResponse {
    total: number;
    entries: Feed[];
}

export interface Feed {
    title: string;
    description: string;
    programType: "series" | "movie";
    releaseYear: number;
    images: FeedImage;
}

export interface FeedImage {
    "Poster Art": {
        url: string;
        width: number;
        height: number;
    };
}
