import PagesWikiDTO from "./PagesWikiDTO";

export default interface SearchWikiDTO {
    "continue": {
        "picontinue": number;
        "continue": string;
    },
    "query": {
        "pages": PagesWikiDTO[];
    }
}