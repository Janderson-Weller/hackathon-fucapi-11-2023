import React, { useEffect } from 'react';
import ToDoList from './components/ToDoList';
import { CButton, CCol, CContainer, CForm, CFormInput, CFormLabel, CRow } from '@coreui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeStateByProps } from '../../store/slice/todo';
import { ToDoDTO } from '../../interface/TodoDTO';

function Todo() {

    const today = new Date();
    const { task, listToDo, toDo, listToDoRemove } = useAppSelector(state => state.toDoSlice);
    const dispatch = useAppDispatch();

    function handleChangeInput(value: string, prop: keyof ToDoDTO) {
        const todayCreate = new Date();

        if (prop === "task")
            dispatch(changeStateByProps({ prop: "task", value: { title: value, dateCreate: todayCreate.toISOString().split('T')[0] } }));
        else
            dispatch(changeStateByProps({ prop: 'toDo', value: { ...toDo, title: value, dateCreate: todayCreate.toISOString().split('T')[0] } }));
    }

    // Adiciona um novo elemento na lista
    const handleAddToDoValues = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!task) {
            return;
        };

        if (task && toDo)
            dispatch(changeStateByProps({ prop: 'toDo', value: { ...toDo, task: [...toDo.task, task] } }));

        dispatch(changeStateByProps({ prop: "task", value: undefined }));
    }

    const handleFinishedToDo = () => {
        const list = handleGetToDoLocalStorage();
        if (!list)
            localStorage.setItem('todoList', JSON.stringify([toDo]));
        else
            localStorage.setItem('todoList', JSON.stringify([...list, toDo]));

        dispatch(changeStateByProps({ prop: 'toDo', value: { title: '', task: [] } }));
        dispatch(changeStateByProps({ prop: "listToDo", value: handleGetToDoLocalStorage() ?? [] }));
    }


    const handleGetToDoLocalStorage = (): ToDoDTO[] | undefined => {
        const listHistoric = localStorage.getItem('todoList');

        if (listHistoric === null)
            return;

        return JSON.parse(listHistoric);
    }

    const handleDeleteSelect = () => {
        const list = handleGetToDoLocalStorage();

        if (list) {
            const removed = list.filter(remove => (!listToDoRemove.some((wanted) => wanted.title === remove.title)));

            localStorage.setItem('todoList', JSON.stringify(removed));
            dispatch(changeStateByProps({ prop: "listToDo", value: removed }));
        }
    }

    const handleClearListLocalStorage = () => {
        localStorage.removeItem('todoList');
        dispatch(changeStateByProps({ prop: "listToDo", value: [] }));
    }

    useEffect(() => {
        dispatch(changeStateByProps({ prop: "listToDo", value: handleGetToDoLocalStorage() ?? [] }));
    }, []);

    return (
        <CContainer className="mt-3" fluid>
            <CRow className='m-0'>
                {
                    listToDo.length > 0 &&
                    <CCol>
                        <CContainer fluid style={{ maxWidth: '400px' }} className="bg-dark rounded text-white py-2">
                            <CFormLabel className="fs-5 text-center w-100 mt-4">Tarefas Anteriores</CFormLabel>
                            <ToDoList itemsList={listToDo} />
                            <CContainer className="d-flex justify-content-center gap-2">
                                <CButton className="bg-danger border-0 mt-3" onClick={handleClearListLocalStorage}>Excluir lista</CButton>
                                <CButton className="bg-danger border-0 mt-3" onClick={handleDeleteSelect}>Excluir Selecionados</CButton>
                            </CContainer>
                        </CContainer>
                    </CCol>
                }
                <CCol className="">
                    <CContainer fluid style={{ maxWidth: '400px' }} className="bg-dark rounded text-white py-2">
                        <CFormLabel className="fs-5 text-center w-100 mt-4">Lista de Tarefas do dia {today.toLocaleDateString()} </CFormLabel>
                        <CForm onSubmit={handleAddToDoValues}>
                            <CContainer className="w-100 p-0" fluid>
                                <CFormInput className="mb-3" placeholder="Nome da lista" label="Nome da lista" onChange={({ target }) => handleChangeInput(target.value, "title")} value={toDo.title} />
                                <CFormInput className="mb-3" placeholder="Adicione uma tarefa" onChange={({ target }) => handleChangeInput(target.value, "task")} value={task?.title ?? ""} />
                                <CContainer className="d-flex justify-content-center gap-2">
                                    <CButton className="bg-success mt-2 border-0 w-auto" type="submit">Adicionar</CButton>
                                    <CButton className="bg-success mt-2 border-0 w-auto" type="button" onClick={handleFinishedToDo}>Finalizar Lista</CButton>
                                </CContainer>
                            </CContainer>
                        </CForm>
                        <CContainer className="p-0 mb-2">
                            <ToDoList itemsList={toDo.task} />
                        </CContainer>
                    </CContainer>
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default Todo;