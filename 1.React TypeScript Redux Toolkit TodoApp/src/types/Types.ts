export interface TodoInitialState {
  todos: TodoType[];
}

export interface TodoType {
  id: number;
  context: string;
}
