export interface TaskDTO {
    title: string;
    dateCreate: string;
}

export interface ToDoDTO {
    title: string;
    task: TaskDTO[];
    dateCreate?: string;
}