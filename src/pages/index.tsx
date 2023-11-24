import { CButton, CContainer, CForm, CFormInput, CNav, CNavLink, CNavbar, CNavbarBrand } from "@coreui/react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { getSearchWikiAction, getSearchYouTubeAction } from "../actions/searchAction";
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const InitialPage = () => {

    const dispatch = useAppDispatch();
    const [search, setSearch] = useState<string>("");
    let { pathname } = useLocation();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (pathname === '/wikipedia')
                dispatch(getSearchWikiAction(search));
            else
                dispatch(getSearchYouTubeAction(search));
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
                        <CNavLink className="d-flex p-0" active={pathname === "/wikipedia"} component={"span"}>
                            <Link to={"/wikipedia"} className={`w-100 h-100 py-2 px-3 text-decoration-none text-dark`}>Wikipédia</Link>
                        </CNavLink>
                        <CNavLink className="d-flex p-0" active={pathname === "/youtube"} component={"span"}>
                            <Link to={"/youtube"} className={`w-100 h-100 py-2 px-3 text-decoration-none text-dark`}>YouTube</Link>
                        </CNavLink>
                        <CNavLink className="d-flex p-0" active={pathname === "/todo-list"} component={"span"}>
                            <Link to={"/todo-list"} className={`w-100 h-100 py-2 px-3 text-decoration-none text-dark`}>Lista de Tarefas</Link>
                        </CNavLink>
                    </CNav>
                </CContainer>
                <Outlet />
            </CContainer>
        </>
    );
}

export default InitialPage;