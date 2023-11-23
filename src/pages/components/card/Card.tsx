import { CButton, CCard, CCol, CCardBody, CCardText, CCardTitle, CRow, CCardFooter, CModal, CModalBody, CContainer, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useState } from "react";
import { createPortal } from "react-dom";
import Loader from "../../../shared/Loader";

const Card = () => {

    const { resultSearch, loading } = useAppSelector(state => state.searchWikiSlice);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [link, setLink] = useState<string | undefined>(undefined);
    const [showIframe, setShowIframe] = useState<boolean>(false);

    console.log(showIframe)

    if (loading) {
        return (
            <CContainer className="vh-100">
                <Loader />
            </CContainer>
        );
    }

    return (
        <>
            <CRow className="m-0" xs={{ cols: 4 }}>
                {
                    resultSearch.map(item => (
                        <CCol key={item.pageid} className="m-0 d-flex justify-content-center mb-3 mt-3" xs={12} md={3} lg={3}>
                            <CCard className="w-100">
                                <CCardBody>
                                    <CRow>
                                        <CCol className="mb-2"
                                            style={{ height: '100px', width: '80px', background: `url(${!item.thumbnail ? 'https://pt.wikipedia.org/static/images/icons/wikipedia.png' : item.thumbnail?.source}) center no-repeat` }}>
                                        </CCol>
                                    </CRow>
                                    <CCardTitle className="fs-6">{item.title}</CCardTitle>
                                    <CCardText>{item.description}</CCardText>
                                </CCardBody>
                                <CCardFooter className="d-flex justify-content-center">
                                    <CButton
                                        onClick={() => {
                                            setShowModal(true);
                                            setShowIframe(true);
                                            setLink(`https://pt.wikipedia.org/wiki/${item.title.replaceAll(' ', '_')}`);
                                        }}
                                    >Detalhar</CButton></CCardFooter>
                            </CCard>
                        </CCol >
                    ))
                }
            </CRow >
            {
                showModal &&
                createPortal(
                    <CModal visible={showModal} onClose={() => setShowModal(false)} size="xl">
                        <CModalHeader>
                            <CModalTitle>Detalhe da pesquisa</CModalTitle>
                        </CModalHeader>
                        <CModalBody className="position-relative" style={{ height: "85vh" }}>
                            {
                                showIframe && <Loader />
                            }
                            <CContainer className="d-flex z-3 h-100 w-100 position-absolute top-50 start-50 translate-middle">
                                <iframe
                                    onLoad={() => { setShowIframe(true); console.log("jjjjjjjjjj") }}
                                    title="iframeSearch" id="modalIframe"
                                    className={`w-100 h-100 ${showIframe} ? 'd-none' : 'd-block'`}
                                    src={`https://pt.wikipedia.org/wiki/${link}`}></iframe>
                            </CContainer>
                        </CModalBody>
                        <CModalFooter>
                            <CButton onClick={() => setShowModal(false)}>Fechar</CButton>
                        </CModalFooter>
                    </CModal>,
                    document.body)
            }
        </>
    );
}

export default Card;