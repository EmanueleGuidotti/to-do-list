import { FC, useEffect, useState } from "react";
import { Box, Container } from "@mui/system";
import { TodoListComponent } from "./todoListComponent";
import { AddTodoContainer } from "../../common/addTodo";
import { todosApi, useGetTodosQuery } from "../../services/todo.service";
import { useAppDispatch } from "../../hooks";

const TodoListContainer: FC = () => {
  interface todoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const {
    data: todosListData,
    error: todosListError,
    isLoading: todosListLoading,
  } = useGetTodosQuery();

  const dispatch = useAppDispatch();

  const addToList = (text: string) => {
    const list = [...todosListData];
    const sortedListById = list.sort((a: todoItem, b: todoItem) => a.id - b.id);
    let lastItemId = sortedListById[sortedListById.length - 1].id;
    let newItem = {
      id: (lastItemId += 1),
      title: text,
      completed: false,
      userId: Math.floor(Math.random() * 10) + 1,
    };
    dispatch(
      todosApi.util.updateQueryData(
        "getTodos",
        undefined,
        (todos: todoItem[]) => {
          todos.unshift(newItem);
        }
      )
    );
  };

  if (todosListLoading) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <p>...Loading</p>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <AddTodoContainer onAddToList={addToList} />
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <TodoListComponent list={todosListData} />
      </Box>
    </Container>
  );
};

export { TodoListContainer };
