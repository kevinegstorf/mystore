// @ts-ignore
import productsList from "../../data/products.json";

interface action {
  type: string;
}

function showProducts(state = productsList, action: action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default showProducts;
