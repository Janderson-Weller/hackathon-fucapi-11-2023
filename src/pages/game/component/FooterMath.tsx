import { CButton, CCol, CContainer, CFormLabel, CRow } from "@coreui/react"

interface FooterMathProps {
    listOperations: { calculus: string, result: number }[];
    clickOption: (index: number) => void;
}

const FooterMath = ({ listOperations, clickOption }: FooterMathProps) => {

    return (
        <CContainer className="d-flex justify-content-center flex-column gap-2" fluid>
            <CFormLabel className="w-100 text-center fw-semibold">Escolha um resultado abaixo para selecionar a jogada</CFormLabel>
            <CRow className="m-0 border px-2 py-3 justify-content-center rounded">
                {
                    Array.from({ length: 9 }).map((_, index: number) => (
                        <CCol key={index} className="d-flex justify-content-center">
                            <CButton type="button" onClick={() => clickOption(index)}>{listOperations[index].result}</CButton>
                        </CCol>
                    ))
                }
            </CRow>
        </CContainer>
    );
}

export default FooterMath;