import { ChangeEvent, FC } from "react";
import Checkbox from "@mui/material/Checkbox";
import { todosApi } from "../../../../services/todo.service";
import { useAppDispatch } from "../../../../hooks";
import { TodoItemI } from "../../../../utils/interfaces/todo.interfaces";

interface CheckboxContainerI {
  completed: boolean;
  id: number;
}
const CheckboxContainer: FC<CheckboxContainerI> = ({ completed, id }) => {
  const dispatch = useAppDispatch();

  const checkCompleted = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    dispatch(
      todosApi.util.updateQueryData(
        "getTodos",
        undefined,
        (todos: TodoItemI[]) => {
          todos.map((listItem) => {
            if (listItem.id === id) {
              listItem.completed = checked;
              return listItem;
            } else return listItem;
          });
        }
      )
    );
  };

  return <Checkbox checked={completed} onChange={checkCompleted} />;
};

export { CheckboxContainer };
