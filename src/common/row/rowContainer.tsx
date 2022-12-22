import { FC } from "react";
import { RowComponent } from "./rowComponent";

interface RowContainerI {
  id: number;
  title: string;
  completed: boolean;
}

const RowContainer: FC<RowContainerI> = ({ id, title, completed }) => {
  return (
    <RowComponent
      id={id}
      title={title}
      completed={completed}
      spacing={2}
    ></RowComponent>
  );
};

export { RowContainer };
