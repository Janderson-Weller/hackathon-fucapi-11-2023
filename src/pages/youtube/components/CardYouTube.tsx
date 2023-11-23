import { CButton, CCard, CCol, CCardBody, CCardText, CCardTitle, CRow, CCardFooter, CModal, CModalBody, CContainer, CModalFooter, CModalHeader, CModalTitle, CFormLabel } from "@coreui/react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useState } from "react";
import { createPortal } from "react-dom";
import Loader from "../../../shared/Loader";

const CardYouTube = () => {

    const { resultSearchYouTube } = useAppSelector(state => state.searchSlice);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [link, setLink] = useState<string | undefined>(undefined);
    const [showIframe, setShowIframe] = useState<boolean>(false);

    return (
        <>
            <CRow className="m-0" xs={{ cols: 4 }}>
                {
                    resultSearchYouTube.length > 0 ? resultSearchYouTube.map(item => (
                        <CCol key={item.id.videoId} className="m-0 d-flex justify-content-center mb-3 mt-3" xs={12} md={3} lg={3}>
                            <CCard className="w-100">
                                <CCardBody>
                                    <CRow>
                                        <CCol className="mb-2"
                                            style={{ height: '100px', width: '80px', background: `url(${!item.snippet.thumbnails ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==' : item.snippet.thumbnails.default.url}) center no-repeat` }}>
                                        </CCol>
                                    </CRow>
                                    {/* <CCardTitle className="fs-6">{item.title}</CCardTitle> */}
                                    {/* <CCardText>{item.description}</CCardText> */}
                                </CCardBody>
                                <CCardFooter className="d-flex justify-content-center">
                                    <CButton
                                        onClick={() => {
                                            setShowModal(true);
                                            setShowIframe(true);
                                            // setLink(`${item.title.replaceAll(' ', '_')}`);
                                        }}
                                    >Detalhar</CButton></CCardFooter>
                            </CCard>
                        </CCol >
                    ))
                        :
                        <CContainer fluid className="d-flex align-items-center w-100 text-center" style={{ height: "400px" }}>
                            <CFormLabel className="fs-4 w-100">Sua busca não retornou dados</CFormLabel>
                        </CContainer>
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
                                    onLoad={() => setShowIframe(true)}
                                    title="iframeSearch" id="modalIframe"
                                    className={`w-100 h-100 ${showIframe} ? 'd-none' : 'd-block'`}
                                    src={`https://www.youtube.com/watch?v=${link}`}></iframe>
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

export default CardYouTube;