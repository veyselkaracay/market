import React, { useEffect } from "react";
import { useNotification } from "../shared/context/notification-context";
import { CursorClickIcon } from "@heroicons/react/solid";

const SelectedItem = (props) => {
  const dispatch = useNotification();

  // sepete urun eklendikce toplam fiyati gunceller
  useEffect(() => {
    if (props.itemsAddedToCart.length > 0) {
      let price = 0;
      props.itemsAddedToCart.map(
        (el) =>
          (price =
            Number(el.adet) *
            (price +
              (Number(el.fiyat) + Number(el.fiyat) * Number(el.kdv) * 0.01)))
      );
      props.setTotalPrice(price);
    }
  }, [props.itemsAddedToCart]);

  // ekle butonuna tiklandiginda oncelikle bir urun secili mi diye kontrol eder
  // secili ise secili olan urun halihazirda sepette mevcut mu diye kontrol eder
  // mevcutsa sepetteki urunun miktarini gunceller
  // mevcut degilse urunu dogru miktarda sepete ekler ve toplam fiyati sifirlar
  // satin alma bilgisini raporlara ekler
  // ardindan secili urunu sifirlar
  const handleAddToCart = () => {
    if (props.selected) {
      const isAlreadyExists = checkIsAlreadyExists();
      if (isAlreadyExists) {
        const updatedCart = props.itemsAddedToCart.map((el) => {
          if (el.id === props.selected.id)
            return {
              ...el,
              adet: Number(el.adet) + Number(props.quantity),
            };
          return el;
        });
        props.setItemsAddedToCart(updatedCart);
      } else {
        const itemToBeAddedToCart = { ...props.selected, adet: props.quantity };
        props.setItemsAddedToCart([
          ...props.itemsAddedToCart,
          itemToBeAddedToCart,
        ]);
      }
      props.setSelected(null);
      props.setQuantity(0);
      dispatch({
        type: "SUCCESS",
        title: "Ürün sepete eklendi",
        message: "Seçili ürün sepetinize eklendi",
        duration: 3,
      });
    } else {
      dispatch({
        type: "ERROR",
        title: "Sepetiniz boş",
        message: "Lütfen önce sepetinize ürün ekleyin",
        duration: 5,
      });
    }
  };

  // daha once sepete eklenmis bir urunun miktarini secilen yeni sayi ile gunceller
  const handleUpdateSelected = () => {
    if (props.selected) {
      const isAlreadyExists = checkIsAlreadyExists();
      if (isAlreadyExists) {
        const updatedCart = props.itemsAddedToCart.map((el) => {
          if (el.id === props.selected.id)
            return {
              ...el,
              adet: Number(props.quantity),
            };
          return el;
        });
        props.setItemsAddedToCart(updatedCart);
        props.setSelected(null);
        props.setQuantity(0);
      } else {
        dispatch({
          type: "ERROR",
          title: "Ürün sepette yok",
          message:
            "Seçili ürün sepetinizde yok. Düzenlemek yerine eklemeyi deneyebilirsiniz.",
          duration: 3,
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

  // secili olan urun halihazirda sepette mevcut mu diye kontrol eder
  const checkIsAlreadyExists = () => {
    const isFound = props.itemsAddedToCart.some((el) => {
      if (el.id === props.selected.id) {
        return true;
      } else {
        return false;
      }
    });
    return isFound;
  };

  return (
    <>
      <div className="flex items-center justify-center shrink-0 h-12 lg:h-14 w-full rounded-t-lg">
        <h2 className="text-sm lg:text-lg font-medium text-gray-800">
          SEÇİLİ ÜRÜN
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-4 lg:px-6">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-3 grid-rows-3 lg:grid-rows-1 gap-2 lg:gap-4">
            <div className="col-span-3 row-span-2 lg:col-span-1">
              {/* MOBILE */}
              <div className="lg:hidden h-full w-full rounded-lg bg-white">
                {props.selected ? (
                  <div className="flex items-center space-x-3 h-16 w-full rounded-lg bg-gray-200">
                    <div
                      style={{
                        backgroundImage: `url('${props.selected.gorsel}')`,
                      }}
                      className="h-full w-16 aspect-square shrink-0 bg-cover rounded-l-lg"
                    ></div>
                    <div className="truncate text-sm text-gray-800">
                      <p className="font-semibold truncate">
                        {props.selected.isim}
                      </p>
                      <p className="font-semibold align-baseline truncate">
                        {(
                          Number(props.selected.fiyat) +
                          Number(props.selected.fiyat) *
                            Number(props.selected.kdv) *
                            0.01
                        ).toFixed(2)}
                        <span className="text-xs">
                          ₺/{props.selected.birim}
                        </span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-16 w-full items-center justify-center space-x-1 text-xs lg:text-lg font-semibold text-gray-800">
                    <CursorClickIcon className="h-4 w-4 shrink-0" />
                    <span>SEÇİLİ ÜRÜN YOK</span>
                  </div>
                )}
              </div>
              {/* LARGE SCREENS */}
              <div className="hidden lg:block h-36 w-full rounded-lg">
                {props.selected ? (
                  <div className="relative group h-36 w-full overflow-hidden rounded-lg bg-white">
                    <div
                      style={{
                        backgroundImage: `url('${props.selected.gorsel}')`,
                      }}
                      className="h-full w-full bg-none bg-center bg-cover cursor-pointer scale-90 group-hover:scale-100 transition-transform duration-200 ease-in-out"
                    />
                    <div className="flex justify-between items-end h-20 px-4 pb-3 absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-b from-transparent to-gray-900/70 text-gray-100">
                      <span className="text-sm font-semibold truncate">
                        {props.selected.isim}
                      </span>
                      <span className="text-sm font-semibold align-baseline">
                        {(
                          Number(props.selected.fiyat) +
                          Number(props.selected.fiyat) *
                            Number(props.selected.kdv) *
                            0.01
                        ).toFixed(2)}
                        <span className="text-xs">
                          ₺/{props.selected.birim}
                        </span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full w-full items-center justify-center p-2 space-y-1.5 rounded-lg text-sm lg:text-lg font-semibold text-gray-800 bg-white">
                    <CursorClickIcon className="h-5 w-5 shrink-0" />
                    <span className="text-center">SEÇİLİ ÜRÜN YOK</span>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:row-span-2 flex flex-col h-full w-full items-center justify-center rounded-lg text-sm font-semibold text-gray-100 bg-amber-500">
              <span className="text-base lg:text-5xl font-bold leading-tight inline-flex align-baseline">
                {props.quantity}
                <span className="block lg:hidden">x</span>
              </span>
              <span className="hidden lg:block text-xs lg:text-xl">ADET</span>
            </div>
            <button
              type="button"
              onClick={handleUpdateSelected}
              className="lg:row-span-2 flex h-full w-full items-center justify-center rounded-lg text-xs lg:text-xl font-semibold text-gray-100 bg-pink-500"
            >
              DÜZENLE
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex lg:hidden h-full w-full items-center justify-center rounded-lg text-xs lg:text-xl font-semibold text-gray-100 bg-indigo-500"
            >
              EKLE
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          className="hidden lg:col-span-1 lg:flex h-full w-full items-center justify-center rounded-lg text-xl font-semibold text-gray-100 bg-indigo-500"
        >
          EKLE
        </button>
      </div>
    </>
  );
};

export default SelectedItem;
