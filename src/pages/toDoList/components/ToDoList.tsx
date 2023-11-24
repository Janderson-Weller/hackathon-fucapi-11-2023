import { CContainer, CFormCheck, CListGroup, CListGroupItem } from "@coreui/react";
import { TaskDTO, ToDoDTO } from "../../../interface/TodoDTO";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { changeStateByProps } from "../../../store/slice/todo";

const ToDoList = ({ itemsList }: { itemsList: TaskDTO[] | ToDoDTO[] }) => {

    // Função auxiliar para verificar se é do tipo TodoListDTO[]
    const isTodoList = (item: TaskDTO | ToDoDTO): item is ToDoDTO => {
        return 'task' in item; // se existe a key 'todo' é do tipo TodoListDTO
    };

    const { listToDo, listToDoRemove } = useAppSelector(state => state.toDoSlice);
    const dispatch = useAppDispatch();

    const handleRemoveToDo = (todo: ToDoDTO, checked: boolean) => {
        let removed: ToDoDTO[] = [];

        if (checked) {
            removed = listToDo.filter(wanted => wanted.title === todo.title);
            dispatch(changeStateByProps({ prop: "listToDoRemove", value: [...listToDoRemove, ...removed] }));
        }
        else {
            removed = listToDoRemove.filter(wanted => wanted.title !== todo.title);
            dispatch(changeStateByProps({ prop: "listToDoRemove", value: [...removed] }));
        }
    }

    const handleGetToDo = (item: ToDoDTO) => {
        dispatch(changeStateByProps({ prop: "toDo", value: item }));
    }

    return (
        <CListGroup className="w-100 mt-4">
            {
                itemsList.length > 0 && itemsList.map((item: TaskDTO | ToDoDTO, index: number) => (
                    <CContainer key={index} className="m-0 d-flex align-items-center gap-2">
                        {
                            isTodoList(item) &&
                            <CFormCheck
                                checked={listToDoRemove.find(wanted => wanted.title === item.title) ? true : false}
                                className="w-auto h-100"
                                onChange={(e) => handleRemoveToDo(item, e.target.checked)}
                            />
                        }
                        <CListGroupItem
                            color="success border-0 text-dark"
                            key={index}
                            className="w-100 mt-2 rounded"
                            onClick={() => {
                                if (isTodoList(item)) {
                                    handleGetToDo(item);
                                }
                            }}
                        >{item.title}</CListGroupItem >
                    </CContainer>
                ))
            }
        </CListGroup >
    );
}

export default ToDoList;