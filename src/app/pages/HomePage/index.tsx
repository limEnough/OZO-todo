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
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo Main" />
      </Helmet>

      <Wrapper>
        <Box>
          {/* 타이틀 */}
          <Title>할 일</Title>
          {/* 입력 영역 */}
          <TodoInput></TodoInput>
          {/* 리스트 */}
          <TodoList>
            <TodoItem
              todo={{
                id: '1',
                completed: false,
                content: '투두입니다1',
                editing: false,
              }}
            ></TodoItem>
            <TodoItem
              todo={{
                id: '2',
                completed: true,
                content: '투두입니다2',
                editing: false,
              }}
            ></TodoItem>
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
