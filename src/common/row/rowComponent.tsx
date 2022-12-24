import { FC } from "react";
import Grid from "@mui/system/Unstable_Grid";
import Close from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import { CheckboxContainer } from "./components/checkbox";
import { RemoveItemContainer } from "./components/removeItem";

interface RowComponentI {
  id: number;
  title: string;
  completed: boolean;
  spacing: number;
}

const RowComponent: FC<RowComponentI> = ({ spacing, id, title, completed }) => {
  return (
    <>
      <Grid container spacing={spacing}>
        {/*@ts-ignore*/}
        <Grid item xs={2}>
          <RemoveItemContainer id={id} />
        </Grid>
        {/*@ts-ignore*/}
        <Grid item xs={8}>
          {title}
        </Grid>
        {/*@ts-ignore*/}
        <Grid item xs={2}>
          <CheckboxContainer id={id} completed={completed} />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export { RowComponent };
