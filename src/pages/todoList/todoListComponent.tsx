import { FC, useMemo } from "react";
import { RowContainer } from "../../common/row";

interface listItemI {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListComponentI {
  list: listItemI[];
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
      {sortedList.map(({ id, title, completed }: listItemI) => {
        return (
          <RowContainer key={id} id={id} title={title} completed={completed} />
        );
      })}
    </>
  );
};

export { TodoListComponent };
