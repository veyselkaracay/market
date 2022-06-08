import React, { useState } from "react";
import ProductList from "./ProductList";
import { SearchIcon } from "@heroicons/react/solid";

const Products = (props) => {
  const [filteredData, setFilteredData] = useState(props.data);
  const [searchKey, setSearchKey] = useState("");

  // arama alanina girilen keyword'e gore urunleri filtreler
  const handleChange = (value) => {
    setSearchKey(value);
    if (value.length > 0) {
      const searchResult = props.data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setFilteredData(searchResult);
    } else {
      setFilteredData(props.data);
    }
  };

  return (
    <div className="row-span-2 lg:row-span-3 flex h-full max-h-full overflow-hidden">
      <div className="card relative h-full max-h-full overflow-hidden w-full">
        <div className="flex items-center justify-between shrink-0 h-12 lg:h-14 w-full px-4 lg:px-6 rounded-t-lg">
          <h2 className="text-sm lg:text-lg font-medium text-gray-800">
            ÜRÜNLER
          </h2>
          <div className="group mt-1 relative flex items-center">
            <input
              type="text"
              name="search"
              id="search"
              autoComplete="off"
              placeholder="Ürün ara"
              className="ring-0 focus:ring-0 border-gray-400/20 focus:border-gray-400/80 bg-white/30 focus:bg-white/30 block w-full pr-12 pl-1.5 py-1 text-xs lg:text-sm rounded-lg text-gray-500 focus:text-gray-700 focus:placeholder:text-gray-700 placeholder:text-gray-400"
              value={searchKey}
              onChange={(e) => handleChange(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex py-1 pr-1.5">
              <SearchIcon className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600/30 group-focus-within:text-gray-600/50" />
            </div>
          </div>
        </div>
        <div className="absolute top-12 lg:top-14 left-0 right-0 bottom-4 lg:bottom-6 overflow-y-auto">
          <ProductList
            data={filteredData}
            setData={setFilteredData}
            selected={props.selected}
            setSelected={props.setSelected}
            quantity={props.quantity}
            setQuantity={props.setQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
