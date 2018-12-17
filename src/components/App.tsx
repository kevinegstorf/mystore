import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Theme from "../styles/Theme";

const Index = () => <Home />;
const About = () => <Product />;
const Users = () => <h2>Users</h2>;

export interface AppProps {}

export default function App(props: AppProps) {
  return (
    <Theme>
      <Router>
        <div>
          <Route path="/" exact component={Index} />
          <Route path="/product/" component={Product} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    </Theme>
  );
}
