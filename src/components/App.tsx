import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Product } from "../types/index";
import ProductCard from "./ProductCard/ProductCard";

type Props = {
  products: Array<Product>;
};

class App extends Component<Props> {
  render() {
    const { products } = this.props;
    return (
      <div className="App">
        <h1>Cool tshirts</h1>

        <ul>
          {products.map(product => {
            return (
              <li key={product.id}>
                <ProductCard name={product.name} color={product.color} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    products: state.products
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
