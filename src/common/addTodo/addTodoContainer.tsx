import { FC, MouseEventHandler, useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import styles from "./addTodo.module.scss";

interface AddTodoContainerI {
  onAddToList: (text: string) => void;
}
const AddTodoContainer: FC<AddTodoContainerI> = ({ onAddToList }) => {
  const [text, setText] = useState("");

  return (
    <Box className={styles.addTodo} data-testid="add-todo-container-test">
      <TextField
        label="Write your note"
        variant="outlined"
        inputProps={{ "data-testid": "input-test" }}
        onChange={({ target }) => setText(target.value)}
      />
      <Button
        className={styles.addTodo__button}
        variant="outlined"
        size="large"
        data-testid="button-test"
        onClick={() => onAddToList(text)}
      >
        Add to list
      </Button>
    </Box>
  );
};

export { AddTodoContainer };
