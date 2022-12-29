import { rest } from "msw";
import { data as todoMocks } from "./todoMocks";

const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(ctx.json(todoMocks));
  }),
];

export { handlers };
