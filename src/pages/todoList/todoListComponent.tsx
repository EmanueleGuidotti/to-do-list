import { FC } from "react";
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
  return (
    <>
      {list.length &&
        list.map(({ id, title, completed }: listItemI) => {
          return (
            <RowContainer
              key={id}
              id={id}
              title={title}
              completed={completed}
            />
          );
        })}
    </>
  );
};

export { TodoListComponent };
