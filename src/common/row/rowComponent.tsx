import { FC } from "react";
import Grid from "@mui/system/Unstable_Grid";
import Checkbox from "@mui/material/Checkbox";
import Close from "@mui/icons-material/Close";
import { Divider } from "@mui/material";

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
          <Close color="primary" />
        </Grid>
        {/*@ts-ignore*/}
        <Grid item xs={8}>
          {title}
        </Grid>
        {/*@ts-ignore*/}
        <Grid item xs={2}>
          <Checkbox defaultChecked={completed} />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export { RowComponent };
