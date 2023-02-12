import { atom, selector } from "recoil";
import axios from "axios";

export const cartState = atom({
  key: "cart-state",
  default: [],
});

export const productsFetch = selector({
  key: "product-fetch",
  get: async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      return res.data || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  },
});
