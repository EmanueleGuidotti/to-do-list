import { FC, MouseEventHandler, useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";

interface AddTodoContainerI {
  onAddToList: (text: string) => void;
}
const AddTodoContainer: FC<AddTodoContainerI> = ({ onAddToList }) => {
  const [text, setText] = useState("");

  return (
    <Box>
      <TextField
        label="Write your note"
        variant="outlined"
        onChange={({ target }) => setText(target.value)}
      />
      <Button variant="outlined" onClick={() => onAddToList(text)}>
        Add to list
      </Button>
    </Box>
  );
};

export { AddTodoContainer };
