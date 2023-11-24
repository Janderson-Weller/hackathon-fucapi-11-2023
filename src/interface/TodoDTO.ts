export interface TodoDTO {
    title: string;
    dateCreate: string;
}

export interface TodoListDTO {
    title: string;
    todo: TodoDTO[];
    dateCreate?: string;
}