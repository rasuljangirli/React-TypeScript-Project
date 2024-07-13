import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState } from "../types/Types";
import { TodoType } from "../types/Types";
const initialState: TodoInitialState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state: TodoInitialState, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [
        ...state.todos.map((todo: TodoType) =>
          todo.id !== action.payload.id ? todo : action.payload
        ),
      ];
    },
  },
});

export const { createTodo, deleteTodo, updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
