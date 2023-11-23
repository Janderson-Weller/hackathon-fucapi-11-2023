import SearchWikiDTO from "../interface/SearchWikiDTO";
import { fetchRequest } from "./client";

export const apiSearchWiki = async (search: string): Promise<SearchWikiDTO> => {
    return fetchRequest(`https://pt.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&origin=*&prop=pageimages%7Cdescription&piprop=thumbnail&pithumbsize=80&pilimit=15&generator=search&gsrsearch=${search}&gsrnamespace=0&gsrlimit=15&gsrqiprofile=classic_noboostlinks&uselang=content`);
}