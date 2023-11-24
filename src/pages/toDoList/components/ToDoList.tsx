import { CListGroup, CListGroupItem } from "@coreui/react";
import { TodoDTO } from "../../../interface/TodoDTO";

const ToDoList = ({ itemsList }: { itemsList: TodoDTO[] }) => {

    return (
        <CListGroup className="w-100 mt-4">
            {
                itemsList.map((item, index) => (
                    <CListGroupItem color="success border-0 text-dark" key={index} className="w-100 mt-2 rounded">{item.title}</CListGroupItem>
                ))
            }
        </CListGroup>
    );
}

export default ToDoList;