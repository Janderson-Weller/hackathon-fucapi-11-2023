import { CButton, CCol, CContainer, CRow } from "@coreui/react"

interface FooterMathProps {
    listOperations: { calculus: string, result: number }[];
    clickOption: (index: number) => void;
}

const FooterMath = ({ listOperations, clickOption }: FooterMathProps) => {

    return (
        <CContainer className="d-flex justify-content-center" fluid>
            <CRow className="m-0 mt-3 justify-content-center">
                {
                    Array.from({ length: 9 }).map((_, index: number) => (
                        <CCol key={index} style={{ minWidth: '50px'}}>
                            <CButton type="button" onClick={() => clickOption(index)}>{listOperations[index].result}</CButton>
                        </CCol>
                    ))
                }
            </CRow>
        </CContainer>
    );
}

export default FooterMath;