import React from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';

const Box = styled.div<{ isEditing?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${props => (props.isEditing ? '0' : '15px 25px')};
  border-bottom: ${props => (props.isEditing ? 'none' : '1px solid #eee')};
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput({
  addTodo,
  isEditing,
  editContent,
  editModeTodo,
  editTodo,
}: {
  addTodo?: (todo: string) => void;
  isEditing?: boolean;
  editContent?: string;
  editModeTodo?: () => void;
  editTodo?: (content: string) => void;
}) {
  const [content, setContent] = React.useState<string>(editContent || '');
  return (
    <Box isEditing={isEditing}>
      <Input
        placeholder="할 일을 입력해주세요."
        value={content}
        onBlur={e => {
          if (e.currentTarget === e.target && isEditing) {
            if (content === '') {
              alert('수정이 완료되지 않았습니다.');

              setContent(editContent as string);
              return;
            }

            editTodo && editTodo(content);
          }
        }}
        onChange={e => setContent(e.target.value)}
        onKeyPress={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          if (isEditing) {
            editTodo && editTodo(content);
          } else {
            addTodo && addTodo(content);
            setContent('');
          }
        }}
      ></Input>
    </Box>
  );
}
