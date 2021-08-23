import TodoItem from './Todo';

export default function TodoView(props) {
  const checkProp = props.todoList.valueOf().detail == 'Empty Data';
  return (
    <div>
      <ul>
        {!checkProp
          ? props.todoList.map((todo) => <TodoItem todo={todo} />)
          : ''}
      </ul>
    </div>
  );
}
