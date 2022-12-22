import { FC, useEffect, useState } from "react";
import { Box, Container } from "@mui/system";
import { TodoListComponent } from "./todoListComponent";
import { AddTodoContainer } from "../../common/addTodo";

const TodoListContainer: FC = () => {
  const [todoList, setTodoList] = useState<
    {
      id: number;
      title: string;
      completed: boolean;
      userId: number;
    }[]
  >([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodoList(json));
  }, []);

  const addToList = (text: string) => {
    const sortedListById = todoList.sort((a, b) => a.id - b.id);
    const newItem = {
      id: (sortedListById[sortedListById.length - 1].id += 1),
      title: text,
      completed: false,
      userId: Math.floor(Math.random() * 10) + 1,
    };
    setTodoList([...sortedListById, newItem]);
  };

  return (
    <Container maxWidth="sm">
      <AddTodoContainer onAddToList={addToList} />
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <TodoListComponent list={todoList} />
      </Box>
    </Container>
  );
};

export { TodoListContainer };
