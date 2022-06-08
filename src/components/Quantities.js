import React from "react";
import { useNotification } from "../shared/context/notification-context";

const Quantities = (props) => {
  const dispatch = useNotification();
  const quantities = [];

  // tiklanan sayiyi secili hale getirir, bu sayi da secili urunun sepete o kadar sayida eklenmesini saglar
  const handleClick = (value) => {
    if (props.selected) {
      if (props.selected.stok >= value) {
        props.setQuantity(value);
      } else {
        dispatch({
          type: "ERROR",
          title: "Yetersiz stok",
          message: `Bu üründen en fazla ${props.selected.stok} adet ekleyebilirsiniz.`,
          duration: 5,
        });
      }
    } else {
      dispatch({
        type: "ERROR",
        title: "Ürün seçili değil",
        message: "Lütfen önce bir ürün seçiniz",
        duration: 5,
      });
    }
  };

  for (let number = 1; number < 10; number++) {
    quantities.push(
      <button
        key={number}
        type="button"
        onClick={() => handleClick(number)}
        className={`${
          props.quantity === number
            ? `bg-amber-500 text-gray-50`
            : `bg-white text-gray-800`
        } flex items-center justify-center p-1 lg:p-2 aspect-square rounded-lg drop-shadow-sm font-bold text-sm lg:text-lg bg-white transition-colors duration-200 ease-in-out`}
      >
        {number}
      </button>
    );
  }
  return <>{quantities}</>;
};

export default Quantities;
