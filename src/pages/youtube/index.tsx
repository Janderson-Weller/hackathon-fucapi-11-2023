import { CContainer } from "@coreui/react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import Loader from "../../shared/Loader";
import CardYouTube from "./components/CardYouTube";
import { useEffect, useState } from "react";
import { getSearchYouTubeAction } from "../../actions/searchAction";

const YouTube = () => {

    const { resultSearchYouTube, loading } = useAppSelector(state => state.searchSlice);
    const dispatch = useAppDispatch();

    const listSuggestions = ['bem vindo', 'Brasil', 'cotidiano', 'educaçao', 'saude', 'politica'];
    const [index,] = useState<number>(Math.floor(Math.random() * listSuggestions.length));

    useEffect(() => {
        if (resultSearchYouTube.length === 0)
            dispatch(getSearchYouTubeAction(listSuggestions[index]));
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
            <CardYouTube />
        </CContainer>
    );
}

export default YouTube;