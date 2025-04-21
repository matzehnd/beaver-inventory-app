import { Location } from "./core/location";
import { Product } from "./core/product";

export const CONSTANTS: {
  products: { egg: Product };
  locations: { butik: Location };
  units: { pcs: "pcs" };
  shelfLifes: { egg: { days: number } };
} = {
  products: {
    egg: {
      id: "1d4e86a7-fc7a-4b29-b791-4d3475b65ddc",
      name: "Ei",
    },
  },
  locations: {
    butik: {
      id: "ac0c9977-6fdc-4f5f-80a2-53aadf5d5e7e",
      name: "Butik",
    },
  },
  units: {
    pcs: "pcs",
  },
  shelfLifes: { egg: { days: 21 } },
};
