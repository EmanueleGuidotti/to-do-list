import { FC } from "react";
import Close from "@mui/icons-material/Close";
import { todosApi } from "../../../../services/todo.service";
import { useAppDispatch } from "../../../../hooks";
import styles from "./removeItemContainer.module.scss";

interface RemoveItemContainerI {
  id: number;
}

const RemoveItemContainer: FC<RemoveItemContainerI> = ({ id }) => {
  interface todoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const dispatch = useAppDispatch();

  const removeCompleted = () => {
    dispatch(
      todosApi.util.updateQueryData(
        "getTodos",
        undefined,
        (todos: todoItem[]) => todos.filter((listItem) => listItem.id !== id)
      )
    );
  };

  return (
    <Close className={styles.close} color="primary" onClick={removeCompleted} />
  );
};

export { RemoveItemContainer };
