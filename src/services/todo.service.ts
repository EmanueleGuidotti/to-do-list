import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "../settings/axiosInstance";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<any, void>({
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
