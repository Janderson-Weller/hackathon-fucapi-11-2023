export default interface PagesWikiDTO {
    "index": number;
    "pageid": number;
    "ns": number;
    "title": string;
    "extracts": string;
    "thumbnail": {
        "source"?: string;
        "width"?: number;
        "height"?: number
    };
    "description": string;
    "descriptionsource": string
}
