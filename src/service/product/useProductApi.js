import api from "../axios";

const useProductApi = {
  getAll: () => api.get("/products"),
  getOneItem: (slug) => api.get(`/products?slugify=${slug}`),
  addToCartFunc: (data) => api.post(`/cart`, data),
  getAllProductsFromCart: () => api.get("/cart"),
};

export default useProductApi;
