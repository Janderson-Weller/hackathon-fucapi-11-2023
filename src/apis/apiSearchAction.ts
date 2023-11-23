import SearchWikiDTO from "../interface/SearchWikiDTO";
import SearchYouTubeDTO from "../interface/SearchYouTubeDTO";
import { fetchRequest } from "./client";

export const apiSearchWiki = async (search: string): Promise<SearchWikiDTO> => {
    return fetchRequest(`https://pt.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&origin=*&prop=pageimages%7Cdescription&piprop=thumbnail&pithumbsize=80&pilimit=15&generator=search&gsrsearch=${search}&gsrnamespace=0&gsrlimit=15&gsrqiprofile=classic_noboostlinks&uselang=content`);
}

export const apiSearchYouTube = async (search: string): Promise<SearchYouTubeDTO> => {
    return fetchRequest(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&maxResults=20&key=AIzaSyAdSqEEZXv8c5M5kS0S49b3LKFKvicABXU`);
}