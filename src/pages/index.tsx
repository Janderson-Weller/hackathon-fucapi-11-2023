import { CButton, CContainer, CForm, CFormInput, CNavbar, CNavbarBrand } from "@coreui/react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { getSearchWikiAction } from "../actions/searchWikiAction";
import React, { useState } from "react";
import Card from "./components/card/Card";

const InitialPage = () => {

    const dispatch = useAppDispatch();
    const [search, setSearch] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            dispatch(getSearchWikiAction(search));
        }
    }

    return (
        <>
            <CNavbar colorScheme="light" className="bg-light">
                <CContainer fluid>
                    <CNavbarBrand href="/">Biblioteca Virtual</CNavbarBrand>
                    <CForm className="d-flex" onSubmit={handleSubmit}>
                        <CFormInput type="search" className="me-2" value={search} placeholder="Search" onChange={handleSearch} onKeyDown={handleKeyPressEnter} />
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