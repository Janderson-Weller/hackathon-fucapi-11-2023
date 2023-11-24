import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import { CButton, CCol, CContainer, CForm, CFormInput, CFormLabel, CRow } from '@coreui/react';
import { TodoDTO, TodoListDTO } from '../../interface/TodoDTO';

function Todo() {
    const [task, setTask] = useState<TodoDTO | undefined>(undefined);
    const [taskList, setTaskList] = useState<TodoListDTO>({ title: '', todo: [] });
    const [todoListHistoric, setTodoListHistoric] = useState<TodoListDTO[]>([]);
    const today = new Date();

    function handleChangeInput(value: string, prop: keyof TodoListDTO) {
        const todayCreate = new Date();
        console.log(todayCreate.toISOString().split('T')[0])

        if (prop === "todo")
            setTask({ title: value, dateCreate: todayCreate.toISOString().split('T')[0] });
        else
            setTaskList({ ...taskList, title: value, dateCreate: todayCreate.toISOString().split('T')[0] });
    }

    // Adiciona um novo elemento na lista
    function handleAddItemToList(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!task) {
            return;
        };

        const listHistoric = localStorage.getItem('todoList');

        if (listHistoric !== null) {
            const historic = JSON.parse(listHistoric);
            setTodoListHistoric(historic);
            const todayNow = new Date();
            const listToday = historic.filter((todo: TodoListDTO) => todo.dateCreate === todayNow.toISOString().split('T')[0]);
            setTaskList({ ...taskList, todo: listToday });
        }

        // localStorage.setItem('todoList', JSON.stringify(taskList));
        if (task && taskList)
            setTaskList({ ...taskList, todo: [...taskList.todo, task] });
        setTask(undefined);
    }

    return (
        <CContainer className="mt-3" fluid>
            <CRow className='m-0'>
                <CCol>
                    <CContainer fluid style={{ maxWidth: '400px' }}>
                        {/* <CFormLabel className="fs-5 text-center w-100 mt-4">Tarefas Anteriores {today.toLocaleDateString()} </CFormLabel> */}
                        <ToDoList itemsList={taskList?.todo ?? []} />
                    </CContainer>
                </CCol>
                <CCol className="">
                    <CContainer fluid style={{ maxWidth: '400px' }} className="bg-dark rounded text-white py-2">
                        <CFormLabel className="fs-5 text-center w-100 mt-4">Lista de Tarefas do dia {today.toLocaleDateString()} </CFormLabel>
                        <CForm onSubmit={handleAddItemToList}>
                            <CContainer className="w-100 p-0" fluid>
                                <CFormInput className="mb-3" placeholder="Título da lista" label="Nome da tarefa" onChange={({ target }) => handleChangeInput(target.value, "title")} value={taskList.title} />
                                <CFormInput className="mb-3" placeholder="Adicione uma tarefa" onChange={({ target }) => handleChangeInput(target.value, "todo")} value={task?.title ?? ""} />
                                <CContainer className="d-flex justify-content-center">
                                    <CButton className="bg-success mt-2 border-0 w-auto" type="submit">Adicionar</CButton>
                                </CContainer>
                            </CContainer>
                        </CForm>
                        <CContainer className="p-0 mb-2">
                            <ToDoList itemsList={taskList?.todo ?? []} />
                        </CContainer>
                    </CContainer>
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default Todo;