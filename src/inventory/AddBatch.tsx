import { Button, Fab, Stack, TextField } from "@mui/material";
import { FC, useState } from "react";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

const AmountButton: FC<{
  amount: number;
  setter: (amount: number) => void;
}> = ({ amount, setter }) => (
  <Button onClick={() => setter(amount)} variant="contained">
    {amount}
  </Button>
);

interface Props {
  stockChange: (amount: number, date: Dayjs) => Promise<void>;
}

export const AddBatch: FC<Props> = ({ stockChange }) => {
  const [amount, setAmount] = useState(30);
  const [date, setDate] = useState(dayjs());

  return (
    <Stack direction="column" paddingTop={1} spacing={2}>
      <DatePicker
        label="Date"
        value={date}
        onChange={(e) => setDate(dayjs(e))}
        closeOnSelect
      />
      <Stack direction="row" justifyContent="space-between">
        {[6, 12, 24, 30].map((v) => (
          <AmountButton amount={v} setter={setAmount} />
        ))}
      </Stack>
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
        <Button onClick={() => stockChange(amount, date)}>Einlagern</Button>
      </Stack>
    </Stack>
  );
};
