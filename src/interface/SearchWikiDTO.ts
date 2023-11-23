import PagesWikiDTO from "./PagesWikiDTO";

export default interface SearchWikiDTO {
    batchcomplete: boolean;
    continue?: {
        picontinue: number;
        continue: string;
    };
    query?: {
        pages: PagesWikiDTO[];
    }
}