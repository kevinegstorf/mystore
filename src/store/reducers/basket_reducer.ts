import { ADD_TO_CARD } from "../actions";
interface action {
  type: string;
  id: string;
}

function Basket(state = [], action: action) {
  switch (action.type) {
    case ADD_TO_CARD:
      let products = state.filter((item: any) => item.id !== action.id);
      return products;
    default:
      return state;
  }
}

export default Basket;
