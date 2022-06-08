import React from "react";
import CartTable from "./CartTable";
import SelectedItem from "./SelectedItem";

const Cart = (props) => {
  return (
    <div className="card relative w-full">
      <SelectedItem
        selected={props.selected}
        setSelected={props.setSelected}
        itemsAddedToCart={props.itemsAddedToCart}
        setItemsAddedToCart={props.setItemsAddedToCart}
        totalPrice={props.totalPrice}
        setTotalPrice={props.setTotalPrice}
        quantity={props.quantity}
        setQuantity={props.setQuantity}
        paymentMethod={props.paymentMethod}
        setPaymentMethod={props.setPaymentMethod}
      />
      <CartTable itemsAddedToCart={props.itemsAddedToCart} />
    </div>
  );
};

export default Cart;
