import * as React from "react";

export interface ProductProps {}

export default class Product extends React.Component<ProductProps, any> {
  public render() {
    return (
      <>
        <h1>Product</h1>
      </>
    );
  }
}
