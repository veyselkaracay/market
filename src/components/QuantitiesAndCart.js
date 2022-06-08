import React from "react";
import Cart from "./Cart";
import Quantities from "./Quantities";

const QuantitiesAndCart = (props) => {
  return (
    <div className="row-span-3 flex space-x-6 h-full max-h-full overflow-hidden">
      <div className="relative card w-16 lg:w-24 min-w-[4rem] lg:min-w-[6rem] h-full">
        <div className="flex items-center justify-center shrink-0 h-12 lg:h-14 w-full rounded-t-lg">
          <h2 className="text-sm lg:text-lg font-medium text-gray-800">ADET</h2>
        </div>
        <div className="absolute top-12 lg:top-14 left-0 right-0 bottom-4 lg:bottom-6 overflow-y-auto flex flex-col flex-1 justify-between items-center space-y-1">
          <Quantities
            selected={props.selected}
            quantity={props.quantity}
            setQuantity={props.setQuantity}
          />
        </div>
      </div>
      <Cart
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
    </div>
  );
};

export default QuantitiesAndCart;
