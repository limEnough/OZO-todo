// NOTI: 파일을 사용할 때마다 import 할 필요 없이 전역으로 사용하기 위해 .d.ts 파일로 생성
interface TodoItemContent {
  content: string;
}

interface TodoItem extends TodoItemContent {
  id: string;
  completed: boolean;
  editing: boolean;
}
