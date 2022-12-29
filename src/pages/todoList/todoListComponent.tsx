import { FC, useMemo } from "react";
import { RowContainer } from "../../common/row";
import { TodoItemI } from "../../utils/interfaces/todo.interfaces";

interface TodoListComponentI {
  list: TodoItemI[];
}
const TodoListComponent: FC<TodoListComponentI> = ({ list }) => {
  const sortedList = useMemo(() => {
    const todoList = [...list];
    if (todoList.length)
      return todoList.sort((a, b) => Number(a.completed) - Number(b.completed));
    return [];
  }, [list]);

  return (
    <>
      {sortedList.map(({ id, title, completed }: TodoItemI) => {
        return (
          <RowContainer key={id} id={id} title={title} completed={completed} />
        );
      })}
    </>
  );
};

export { TodoListComponent };
