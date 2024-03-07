import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput() {
  // 빈 태그는단순하게 컴포넌트를 코드상으로 연결해둔 것
  return (
    <Box>
      <Input placeholder="할 일을 입력해주세요."></Input>
    </Box>
  );
}
