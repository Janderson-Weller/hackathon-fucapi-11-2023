import { CContainer } from "@coreui/react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import Loader from "../../shared/Loader";
import CardWiki from "./components/CardWiki";
import { useEffect, useState } from "react";
import { getSearchWikiAction } from "../../actions/searchAction";

const Wikipedia = () => {

    const { resultSearchWiki, loading } = useAppSelector(state => state.searchSlice);
    const dispatch = useAppDispatch();

    const listSuggestions = ['bem vindo', 'Brasil', 'cotidiano', 'educaçao', 'saude', 'politica'];
    const [index,] = useState<number>(Math.floor(Math.random() * listSuggestions.length));

    useEffect(() => {
        if (resultSearchWiki.length === 0)
            dispatch(getSearchWikiAction(listSuggestions[index]));
    }, []);

    if (loading) {
        return (
            <CContainer className="vh-100">
                <Loader />
            </CContainer>
        );
    }

    return (
        <CContainer fluid className="p-0">
            <CardWiki />
        </CContainer>
    );
}

export default Wikipedia;