import { Button, Fab, Stack, TextField } from "@mui/material";
import { FC, useState } from "react";
import Add from "@mui/icons-material/Add";
import OutboxOutlinedIcon from "@mui/icons-material/OutboxOutlined";
import Remove from "@mui/icons-material/Remove";

interface Props {
  takeFromStock: (amount: number) => Promise<void>;
  maxAmount: number;
}

export const TakeFromStock: FC<Props> = ({ takeFromStock, maxAmount }) => {
  const [amount, setAmount] = useState(maxAmount);

  return (
    <Stack direction="column" paddingTop={1} spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <Fab onClick={() => setAmount((v) => --v)}>
          <Remove />
        </Fab>
        <TextField sx={{ width: 60 }} value={amount} disabled />
        <Fab onClick={() => setAmount((v) => ++v)}>
          <Add />
        </Fab>
      </Stack>
      <Stack direction="row" justifyContent={"end"}>
        <Button
          variant="contained"
          onClick={() => takeFromStock(amount)}
          color="primary"
        >
          <OutboxOutlinedIcon />
          Auslagern
        </Button>
      </Stack>
    </Stack>
  );
};
