import ItemsYouTubeDTO from "./ItemsYouTubeDTO";

export default interface SearchYouTubeDTO {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
        totalResults: 1000000,
        resultsPerPage: 5
    },
    items: ItemsYouTubeDTO[]
}