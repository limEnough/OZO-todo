import styled from 'styled-components';
import Block from '../Block';
import Checkbox from '../Checkbox';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

const TodoContent = styled.span<{ checked: boolean }>`
  overflow: hidden;
  color: ${props => (props.checked ? '#aaa' : '#212121')};
  text-overflow: ellipsis;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initail')};
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: text;
`;

export default function TodoItem({ todo }: { todo: TodoItem }) {
  // 빈 태그는단순하게 컴포넌트를 코드상으로 연결해둔 것
  return (
    <Box>
      <Checkbox checked={todo.completed}></Checkbox>
      <Block marginLeft="10px"></Block>
      <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
    </Box>
  );
}
