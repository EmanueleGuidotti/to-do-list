import { FC } from "react";
import Grid from "@mui/system/Unstable_Grid";
import { Divider } from "@mui/material";
import { CheckboxContainer } from "./components/checkbox";
import { RemoveItemContainer } from "./components/removeItem";
import { Box } from "@mui/system";
import styles from "./row.module.scss";

interface RowComponentI {
  id: number;
  title: string;
  completed: boolean;
  spacing: number;
}

const RowComponent: FC<RowComponentI> = ({ spacing, id, title, completed }) => {
  return (
    <Box className={styles.row}>
      <Grid container spacing={spacing} className={styles.row__container}>
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
    </Box>
  );
};

export { RowComponent };
