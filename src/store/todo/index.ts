import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import { TodoState } from './types';
import { useInjectReducer } from 'redux-injectors';

export const initailState: TodoState = {
  todoList: [],
};

const slice = createSlice({
  name: 'todo',
  initialState: initailState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<TodoItem>) => {
        state.todoList.push(action.payload);
      },
      // 입력한 todo 콘텐츠를 받아 todo object 반환
      prepare: (content: string) => {
        const id = nanoid();
        return {
          payload: {
            id,
            content,
            completed: false,
            editing: false,
          },
        };
      },
      checkTodo(state, action: PayloadAction<{ id: string }>) {
        const id = action.payload.id;
        const todo = state.todoList.find(todo => todo.id === id);

        if (todo) todo.completed = !todo.completed;
      },
      editModeTodo(state, action: PayloadAction<{ id: string }>) {
        const id = action.payload.id;

        // editing 모드의 todo를 모두 찾아 false로 변경! 현재 id의 todo 하나만 수정하게 하기 위함
        for (const todo of state.todoList) {
          if (todo.id === id) continue;
          if (todo.editing === true) todo.editing = false;
        }

        const todo = state.todoList.find(todo => todo.id === id);
        if (todo) todo.editing = !todo.editing;
      },
      editTodo(state, action: PayloadAction<{ id: string; content: string }>) {
        const id = action.payload.id;
        const content = action.payload.content;
        const todo = state.todoList.find(todo => todo.id === id);

        if (todo) {
          todo.content = content;
        }
      },
      deleteTodo(state, action: PayloadAction<{ id: string }>) {
        const id = action.payload.id;
        const filteredTodos = state.todoList.filter(todo => todo.id !== id);

        state.todoList = filteredTodos;
      },
    },
  },
});

export const { actions: TodoActions } = slice;
export const useTodoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { TodoActions: slice.actions };
};
