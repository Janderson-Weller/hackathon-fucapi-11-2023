import { CButton, CContainer, CForm, CFormInput, CNav, CNavLink, CNavbar, CNavbarBrand } from "@coreui/react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { getSearchWikiAction } from "../actions/searchAction";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const InitialPage = () => {

    const dispatch = useAppDispatch();
    const [search, setSearch] = useState<string>("");
    const [activeKey, setActiveKey] = useState<number>(1);

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
            <CContainer className="mt-3" fluid>
                <CContainer fluid>
                    <CNav variant="tabs" role="tablist">
                        <CNavLink className="d-flex p-0" active={activeKey === 1}  onClick={() => setActiveKey(1)} component={"span"}>
                            <Link to={"/wikipedia"} className={`w-100 h-100 py-2 px-3 text-decoration-none text-dark`}>Wikipédia</Link>
                        </CNavLink>
                        <CNavLink className="d-flex p-0" active={activeKey === 2}  onClick={() => setActiveKey(2)} component={"span"}>
                            <Link to={"/youtube"} className={`w-100 h-100 py-2 px-3 text-decoration-none text-dark`}>YouTube</Link>
                        </CNavLink>                        
                    </CNav>
                </CContainer>
                <Outlet />
            </CContainer>
        </>
    );
}

export default InitialPage;