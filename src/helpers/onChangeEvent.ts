export const onChangeEvent =
  (fn: (value: string) => void) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    return fn(event.target.value);
  };
