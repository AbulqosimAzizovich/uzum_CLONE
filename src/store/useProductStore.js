import { create } from "zustand";

const useProductStore = create((set) => ({
  product: [],
  totalPrice: [],
  totalDiscountPrice: 0,

  isLoad: false,
  setProduct: (data) => set((state) => ({ product: data })),
  setLoader: () => set(() => ({ isLoad: true })),
  setTotalPrice: (data) =>
    set((state) => ({ totalPrice: [...state.totalPrice, data] })),
  setTotalDiscountPrice: (data) =>
    set((state) => ({ totalDiscountPrice: data })),
}));

export default useProductStore;
