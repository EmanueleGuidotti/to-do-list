import { FC, useEffect, useState } from "react";
import { Box, Container } from "@mui/system";
import { TodoListComponent } from "./todoListComponent";
import { AddTodoContainer } from "../../common/addTodo";
import { todosApi, useGetTodosQuery } from "../../services/todo.service";
import { useAppDispatch } from "../../hooks";
import styles from "./todoList.module.scss";
import { TodoItemI } from "../../utils/interfaces/todo.interfaces";

const TodoListContainer: FC = () => {
  const {
    data: todosListData,
    error: todosListError,
    isLoading: todosListLoading,
  } = useGetTodosQuery();

  const dispatch = useAppDispatch();

  const addToList = (text: string) => {
    const list = [...todosListData];
    const sortedListById = list.sort(
      (a: TodoItemI, b: TodoItemI) => a.id - b.id
    );
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
        (todos: TodoItemI[]) => {
          todos.unshift(newItem);
        }
      )
    );
  };

  if (todosListLoading) {
    return (
      <Container maxWidth="sm">
        <h1>Todo List</h1>
        <Box className={styles.todoList__listContainer}>
          <p>...Loading</p>
        </Box>
      </Container>
    );
  }

  if (todosListError) {
    return (
      <Container maxWidth="sm">
        <h1>Todo List</h1>
        <Box className={styles.todoList__listContainer}>
          <p>Error fetching data please retry</p>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <h1>Todo List</h1>
      <AddTodoContainer onAddToList={addToList} />
      <Box className={styles.todoList__listContainer}>
        <TodoListComponent list={todosListData} />
      </Box>
    </Container>
  );
};

export { TodoListContainer };
