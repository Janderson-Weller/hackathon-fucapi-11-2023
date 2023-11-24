import { CCol } from "@coreui/react";

function Square(props: any) {
    return (
        <CCol className="square" {...props}>{props.x ? 'x' : (props.o ? 'o' : '')}</CCol>
    );
}

export default Square;