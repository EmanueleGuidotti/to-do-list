import { FC } from "react";
import Close from "@mui/icons-material/Close";
import { todosApi } from "../../../../services/todo.service";
import { useAppDispatch } from "../../../../hooks";
import styles from "./removeItem.module.scss";
import { TodoItemI } from "../../../../utils/interfaces/todo.interfaces";

interface RemoveItemContainerI {
  id: number;
}

const RemoveItemContainer: FC<RemoveItemContainerI> = ({ id }) => {
  const dispatch = useAppDispatch();

  const removeCompleted = () => {
    dispatch(
      todosApi.util.updateQueryData(
        "getTodos",
        undefined,
        (todos: TodoItemI[]) => todos.filter((listItem) => listItem.id !== id)
      )
    );
  };

  return (
    <Close className={styles.close} color="primary" onClick={removeCompleted} />
  );
};

export { RemoveItemContainer };
