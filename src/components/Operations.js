import React from "react";
import { useNotification } from "../shared/context/notification-context";
import { CurrencyDollarIcon, CreditCardIcon } from "@heroicons/react/outline";

const Operations = (props) => {
  const dispatch = useNotification();

  // odeme islemini halleder
  // oncelikle odeme yontemi secili mi diye kontrol eder
  // secili ise sepete eklenen urunleri sifirlar
  // odeme yontemini sifirlar
  // toplam ucreti sifirlar
  // yeni satis raporu olustur
  const handlePayment = () => {
    if (props.paymentMethod !== null) {
      let helperArr = props.data;
      for (let i = 0; i < props.itemsAddedToCart.length; i++) {
        const updatedStocks = helperArr.map((el) =>
          el.id === props.itemsAddedToCart[i].id
            ? { ...el, stok: el.stok - Number(props.itemsAddedToCart[i].adet) }
            : el
        );
        helperArr = updatedStocks;
      }
      props.setData(helperArr);
      props.setPayments([
        ...props.payments,
        { odemeSekli: props.paymentMethod, tutar: props.totalPrice },
      ]);
      props.setItemsAddedToCart([]);
      props.setPaymentMethod(null);
      props.setTotalPrice(0);
      dispatch({
        type: "SUCCESS",
        title: "Ödeme başarılı",
        message: "Satın alma işlemi başarılı bir şekilde tamamlandı",
        duration: 5,
      });
    } else {
      dispatch({
        type: "ERROR",
        title: "Ödeme yöntemi seçili değil",
        message: "Lütfen önce bir ödeme yöntemi seçiniz",
        duration: 5,
      });
    }
  };

  // mevcut islemi iptal eder, sepeti bosaltir
  const handleCancellation = () => {
    props.setItemsAddedToCart([]);
    props.setPaymentMethod(null);
    props.setTotalPrice(0);
  };

  return (
    <div className="card flex items-center justify-between w-full p-4 lg:p-6">
      <div>
        <button
          type="button"
          onClick={handleCancellation}
          className="px-3 py-1.5 rounded-lg drop-shadow-lg text-sm lg:text-lg font-bold text-gray-100 bg-red-600 hover:bg-red-700"
        >
          İPTAL
        </button>
      </div>
      <div className="flex space-x-2 lg:space-x-4">
        <button
          type="button"
          onClick={() => props.setPaymentMethod("credit-card")}
          className={`${
            props.paymentMethod === "credit-card"
              ? "text-gray-100 bg-green-600 hover:bg-green-700"
              : "text-gray-800 hover:text-gray-100 bg-gray-50 hover:bg-green-600"
          } flex items-center px-3 py-1.5 rounded-lg drop-shadow-lg text-sm lg:text-lg active:bg-green-300 transition-colors duration-200 ease-in-out`}
        >
          <CreditCardIcon className="h-5 w-5 lg:mr-1.5" />
          <span className="hidden lg:block">KREDİ KARTI</span>
        </button>
        <button
          type="button"
          onClick={() => props.setPaymentMethod("cash")}
          className={`${
            props.paymentMethod === "cash"
              ? "text-gray-100 bg-green-600 hover:bg-green-700"
              : "text-gray-800 hover:text-gray-100 bg-gray-50 hover:bg-green-600"
          } flex items-center px-3 py-1.5 rounded-lg drop-shadow-lg text-sm lg:text-lg active:bg-green-300 transition-colors duration-200 ease-in-out`}
        >
          <CurrencyDollarIcon className="h-5 w-5 lg:mr-1.5" />
          <span className="hidden lg:block">NAKİT</span>
        </button>
      </div>
      <div className="flex space-x-2 lg:space-x-4">
        <div className="px-3 py-1.5 rounded-lg drop-shadow-lg font-bold text-sm lg:text-lg text-gray-800 bg-gray-300">
          {props.totalPrice.toFixed(2)}₺
        </div>
        <button
          type="button"
          onClick={handlePayment}
          disabled={props.itemsAddedToCart.length === 0}
          className="px-3 py-1.5 rounded-lg drop-shadow-lg font-bold text-sm lg:text-lg disabled:cursor-not-allowed text-gray-50 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-300 transition-colors duration-200 ease-in-out"
        >
          ÖDENDİ
        </button>
      </div>
    </div>
  );
};

export default Operations;
