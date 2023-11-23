import { CContainer, CSpinner } from "@coreui/react"

const Loader = () => {
    return (
        <CContainer className="d-flex align-items-center justify-content-center h-100" fluid>
            <>
                <CSpinner color="primary" variant="grow" />
                <CSpinner color="secondary" variant="grow" />
                <CSpinner color="success" variant="grow" />
                <CSpinner color="danger" variant="grow" />
                <CSpinner color="warning" variant="grow" />
                <CSpinner color="info" variant="grow" />
                <CSpinner color="light" variant="grow" />
                <CSpinner color="dark" variant="grow" />
            </>
        </ CContainer>
    );
}

export default Loader;