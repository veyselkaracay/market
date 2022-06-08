import React, { useEffect, useState } from "react";

const ProductList = (props) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(props.data);
  }, [props.data]);

  // tiklanan urunu secili hale getirir
  const handleClick = (selected) => {
    props.setSelected(selected);
    props.setQuantity(1);
  };

  return (
    <ul className="grid grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 lg:gap-6 px-4 lg:px-6">
      {productList &&
        productList.length > 0 &&
        productList.map((urun) => (
          <li
            onClick={() => handleClick(urun)}
            key={urun.id}
            className={`${
              props.selected?.id === urun.id
                ? `border-indigo-600`
                : `border-transparent`
            } relative group h-48 w-full overflow-hidden border rounded-lg transition-all duration-100 ease-in-out bg-white`}
          >
            <div
              style={{
                backgroundImage: `url('${urun.gorsel}')`,
              }}
              className="h-full w-full bg-center bg-cover cursor-pointer scale-90 group-hover:scale-100 transition-transform duration-200 ease-in-out"
            />
            <div className="flex justify-between items-end cursor-pointer h-20 px-4 pb-3 absolute bottom-0 left-0 right-0 rounded-b-md bg-gradient-to-b from-transparent to-gray-900/70 text-gray-100">
              <span className="text-sm font-semibold truncate">
                {urun.isim}
              </span>
              <span className="text-sm font-semibold align-baseline">
                {(
                  Number(urun.fiyat) +
                  Number(urun.fiyat) * Number(urun.kdv) * 0.01
                ).toFixed(2)}
                <span className="text-xs">₺/{urun.birim}</span>
              </span>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
