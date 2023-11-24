import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskDTO, ToDoDTO } from "../../interface/TodoDTO";

export interface TodoProps {
    task: TaskDTO | undefined;
    toDo: ToDoDTO;
    listToDo: ToDoDTO[];
    listToDoRemove: ToDoDTO[];
}

const initialState: TodoProps = Object.freeze({
    task: undefined,
    toDo: { title: '', task: [] },
    listToDo: [],
    listToDoRemove: []
});

export const toDoSlice = createSlice({
    name: 'toDoSlice',
    initialState,
    reducers: {
        changeToDo: <K extends keyof TaskDTO,>(state: TodoProps, action: PayloadAction<{ prop: K, value: any }>) => {
            const { prop, value } = action.payload;
            if (!state.task)
                state.task = { title: "", dateCreate: "" }
            state.task[prop] = value;
        },
        changeStateByProps: <K extends keyof TodoProps,>(state: TodoProps, action: PayloadAction<{ prop: K, value: any }>) => {
            const { prop, value } = action.payload;
            state[prop] = value;
        },
    },
})

export const {
    changeToDo,
    changeStateByProps,
} = toDoSlice.actions;

export default toDoSlice.reducer