import React, { useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const CartTable = (props) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(props.itemsAddedToCart);
  }, [props.itemsAddedToCart]);

  return (
    <div className="absolute top-40 lg:top-56 left-4 lg:left-6 right-4 lg:right-6 bottom-4 lg:bottom-6 overflow-y-auto shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 rounded-lg bg-white">
      {tableData && tableData.length > 0 ? (
        <table className="w-full divide-y divide-gray-300">
          <thead className="bg-slate-200">
            <tr>
              <th
                scope="col"
                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
              >
                #
              </th>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Ürün
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Miktar
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Fiyat
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                KDV
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Toplam
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((item, index) => (
              <tr className="odd:bg-gray-100 even:bg-gray-50" key={item.id}>
                <td className="px-3 py-4 text-center text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                  {item.isim}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Title</dt>
                    <dd className="mt-1 truncate text-gray-700">
                      {item.title}
                    </dd>
                    <dt className="sr-only sm:hidden">Miktar</dt>
                    <dd className="mt-1 truncate text-gray-700 sm:hidden">
                      {item.adet}
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {item.adet}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {item.fiyat}₺
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  %{item.kdv}
                </td>
                <td className="px-3 py-4 text-sm text-gray-800">
                  {(
                    (Number(item.fiyat) +
                      Number(item.fiyat) * Number(item.kdv) * 0.01) *
                    Number(item.adet)
                  ).toFixed(2)}
                  ₺
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <ShoppingCartIcon className="h-16 w-16 lg:h-24 lg:w-24 text-indigo-400" />
          <span className="font-semibold text-sm lg:text-lg text-indigo-500">
            SEPETİNİZ BOŞ
          </span>
        </div>
      )}
    </div>
  );
};

export default CartTable;
