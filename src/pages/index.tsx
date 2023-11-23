import { CButton, CContainer, CForm, CFormInput, CNavbar, CNavbarBrand } from "@coreui/react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { getSearchWikiAction } from "../actions/searchWikiAction";
import { useState } from "react";
import Card from "./components/card/Card";

const InitialPage = () => {

    const dispatch = useAppDispatch();
    const [search, setSearch] = useState<string>("");

    return (
        <>
            <CNavbar colorScheme="light" className="bg-light">
                <CContainer fluid>
                    <CNavbarBrand href="/">Biblioteca Virtual</CNavbarBrand>
                    <CForm className="d-flex">
                        <CFormInput type="search" className="me-2" value={search} placeholder="Search" onChange={({ target }) => setSearch(target.value)} />
                        <CButton type="button" color="success" variant="outline" onClick={() => dispatch(getSearchWikiAction(search))}>
                            Search
                        </CButton>
                    </CForm>
                </CContainer>
            </CNavbar>
            <Card />
        </>
    );
}

export default InitialPage;