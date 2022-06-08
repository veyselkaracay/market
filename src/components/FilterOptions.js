import React, { useState } from "react";

const FilterOptions = (props) => {
  const [selected, setSelected] = useState("all");

  // stogu 10 adetten az kalmis olan urunleri filtreler
  const handleFilterLimitedStocks = () => {
    setSelected("limited");
    const limitedStocks = props.tableData.filter((urun) => urun.stok < 10);
    props.setTableData(limitedStocks);
  };
  // stoklarda bulunan tum urunleri goruntuler
  const handleDisplayAll = () => {
    setSelected("all");
    props.setTableData(props.products);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
      <button
        type="button"
        onClick={handleDisplayAll}
        className={`${
          selected === "all"
            ? "text-gray-100 bg-indigo-500 hover:bg-indigo-600"
            : "text-gray-800 hover:text-gray-100 bg-gray-50 hover:bg-indigo-400"
        } rounded-lg px-3 lg:px-4 py-2 lg:py-3 justify-self-center w-full lg:w-fit lg:justify-self-end text-sm lg:text-lg font-semibold active:bg-indigo-300 transition-colors duration-200 ease-in-out`}
      >
        BÜTÜN ÜRÜNLERİ GÖSTER
      </button>
      <button
        type="button"
        onClick={handleFilterLimitedStocks}
        className={`${
          selected === "limited"
            ? "text-gray-100 bg-indigo-500 hover:bg-indigo-600"
            : "text-gray-800 hover:text-gray-100 bg-gray-50 hover:bg-indigo-400"
        } rounded-lg px-3 lg:px-4 py-2 lg:py-3 w-full lg:w-fit text-sm lg:text-lg font-semibold active:bg-indigo-300 transition-colors duration-200 ease-in-out`}
      >
        KRİTİK STOK ÜRÜNLERİ GÖSTER
      </button>
    </div>
  );
};

export default FilterOptions;

// className={`${
//           selected === "limited"
//             ? "text-gray-100 bg-indigo-600 hover:bg-indigo-700"
//             : "text-gray-800 hover:text-gray-100 bg-gray-50 hover:bg-indigo-600"
//         } justify-self-center lg:justify-self-end w-full lg:w-fit px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-sm lg:text-lg active:bg-indigo-300 transition-colors duration-200 ease-in-out`}
//       >
