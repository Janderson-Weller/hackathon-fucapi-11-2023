import { CContainer } from "@coreui/react"
import { useAppSelector } from "../../hooks/reduxHooks";
import Loader from "../../shared/Loader";
import CardWiki from "./components/CardWiki";

const Wikipedia = () => {

    const { loading } = useAppSelector(state => state.searchSlice);

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