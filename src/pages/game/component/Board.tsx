import { CRow } from "@coreui/react";

function Board(props: any) {
    return (
        <CRow xs={{ cols: 3 }} {...props} />
    );
}

export default Board;