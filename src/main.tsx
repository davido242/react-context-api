import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CartState from "./Context/Cart/CartState.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>
);
