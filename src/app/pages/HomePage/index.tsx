/**
 * MEMO: 페이지를 구성하는 index
 */
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';
import { useTodoSlice } from 'store/todo';
import { useDispatch, useSelector } from 'react-redux';
import { TodoListSelector } from 'store/todo/selectors';

const Wrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background: #fff;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
  border-radius: 15px;

  @media (max-width: 425px) {
    width: 100%;
    height: 100dvh;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div`
  overflow-y: auto;
  height: 450px;

  @media (max-width: 425px) {
    height: calc() (100dvh - 128px);
  }
`;

export function HomePage() {
  const { TodoActions } = useTodoSlice();
  const todoList = useSelector(TodoListSelector);
  const dispatch = useDispatch();

  return (
    // 빈 태그는단순하게 컴포넌트를 코드상으로 연결해둔 것
    <>
      {/* 웹 문서의 헤더 값을 변경할 때 사용하는 리액트 컴포넌트 */}
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo Main" />
      </Helmet>

      <Wrapper>
        <Box>
          {/* 타이틀 */}
          <Title>할 일</Title>
          {/* 입력 영역 */}
          <TodoInput
            addTodo={(content: string) =>
              dispatch(TodoActions.addTodo(content))
            }
          ></TodoInput>
          {/* 리스트 */}
          <TodoList>
            {/* 아이템 */}
            {todoList.map(todo => (
              <TodoItem
                todo={todo}
                key={todo.id}
                checkTodo={() =>
                  dispatch(TodoActions.checkTodo({ id: todo.id }))
                }
                editModeTodo={() =>
                  dispatch(
                    TodoActions.editModeTodo({
                      id: todo.id,
                    }),
                  )
                }
                editTodo={(content: string) =>
                  dispatch(
                    TodoActions.editTodo({
                      id: todo.id,
                      content: content,
                    }),
                  )
                }
                deleteTodo={() =>
                  dispatch(TodoActions.deleteTodo({ id: todo.id }))
                }
              ></TodoItem>
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
