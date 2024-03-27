/**
 * MEMO: 페이지를 구성하는 index
 */
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

export function HomePage() {
  // Todo 데이터 샘플 기본값
  const [todoList, setTodoList] = React.useState<TodoItem[]>([
    {
      id: '1',
      completed: false,
      content: '투두입니다1',
      editing: true,
    },
    {
      id: '2',
      completed: false,
      content: '투두입니다2',
      editing: false,
    },
    {
      id: '3',
      completed: true,
      content: '투두입니다3',
      editing: false,
    },
  ]);

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
            setTodoList={(todo: TodoItem) => setTodoList([todo, ...todoList])}
          ></TodoInput>
          {/* 리스트 */}
          <TodoList>
            {/* 아이템 */}
            {todoList.map(todo => (
              <TodoItem todo={todo} key={todo.id}></TodoItem>
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
