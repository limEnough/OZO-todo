import styled from 'styled-components';
import Block from '../Block';
import Checkbox from '../Checkbox';
import CircleButton from '../Button/CircleButton';
import TodoInput from '../TodoInput';

const Box = styled.div<{ isEditing: boolean }>`
  display: flex;
  align-items: center;
  padding: 15px 15px 15px 25px;
  width: 100%;
  min-height: 67px;
  border-bottom: 1px solid #eee;

  & > .delete-button {
    display: none;
  }

  &:hover {
    & > .delete-button {
      display: flex;
    }
  }
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

export default function TodoItem({
  todo,
  checkTodo,
  editModeTodo,
  editTodo,
  deleteTodo,
}: {
  todo: TodoItem;
  checkTodo: () => void;
  editModeTodo: () => void;
  editTodo: (todo: string) => void;
  deleteTodo: () => void;
}) {
  return (
    <Box isEditing={todo.editing}>
      {/* 콘텐츠 */}
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Checkbox
          checked={todo.completed}
          onClick={() => checkTodo()}
        ></Checkbox>
        {/* input coomponent 의 쉬운 재사용을 위한 style 용도의 컴포넌트 */}
        <Block marginLeft="10px"></Block>
        {todo.editing ? (
          <TodoInput
            editTodo={(todo: string) => {
              editModeTodo();
              editTodo(todo);
            }}
            isEditing={true}
            editContent={todo.content}
          ></TodoInput>
        ) : (
          <TodoContent checked={todo.completed} onClick={() => editModeTodo()}>
            {todo.content}
          </TodoContent>
        )}
      </div>

      {/* 액션 */}
      <CircleButton
        onClick={() => deleteTodo()}
        className="delete-button"
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        )}
      ></CircleButton>
    </Box>
  );
}
