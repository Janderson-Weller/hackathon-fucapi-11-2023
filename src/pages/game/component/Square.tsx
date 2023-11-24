import { CCol } from "@coreui/react";

function Square(props: any) {
    return (
        <CCol className="square" {...props}>{props.x ? 'x' : (props.o ? 'o' : `${props.table}`)}</CCol>
    );
}

export default Square;