import { CButton, CCol, CContainer, CRow } from "@coreui/react"

interface FooterMathProps {
    listOperations: { calculus: string, result: string }[];
    clickOption: (index: number) => void;
}

const FooterMath = ({ listOperations, clickOption }: FooterMathProps) => {

    return (
        <CContainer className="mt-5 d-flex justify-content-center" fluid>
            <CRow className="m-0 mt-3 justify-content-center w-50">
                {
                    Array.from({ length: 9 }).map((_, index: number) => (
                        <CCol key={index} style={{ width: '50px'}}>
                            <CButton type="button" onClick={() => clickOption(index)}>{listOperations[index].result}</CButton>
                        </CCol>
                    ))
                }
            </CRow>
        </CContainer>
    );
}

export default FooterMath;