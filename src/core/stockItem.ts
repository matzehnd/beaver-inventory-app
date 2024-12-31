export type StockItem = {
  locationId: string;
  batchId: string;
  quantity: {
    amount: number;
    unit: "pcs";
  };
};
