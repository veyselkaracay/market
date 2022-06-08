import React, { useEffect, useState } from "react";
import FilterOptions from "./FilterOptions";
import DialogModal from "./ui/Dialog";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import UpdateForm from "./UpdateForm";

const StocksTable = (props) => {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({});
  const [selected, setSelected] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // urunlerde bir degisiklik oldukca tabloyu gunceller
  useEffect(() => {
    setTableData(props.data);
  }, [props.data]);

  // secili urun degistikce urun guncelleme formunu secilen urunun bilgileriyle gunceller
  useEffect(() => {
    setFormData(selected);
  }, [selected]);

  // dialog componentini acar ve icinde secili urunu guncelleme formunu goruntuler
  const handleOpenUpdateDialog = (item) => {
    setSelected(item);
    setIsDialogOpen(true);
  };

  // secili urunu girilen yeni verilerle gunceller
  const handleUpdate = (id) => {
    const updatedProducts = props.data.map((el) => {
      if (el.id === id)
        return {
          ...el,
          isim: formData.isim,
          fiyat: formData.fiyat,
          kdv: formData.kdv,
          stok: formData.stok,
          birim: formData.birim,
          gorsel: formData.gorsel,
        };
      return el;
    });
    props.setData(updatedProducts);
    setIsDialogOpen(false);
  };

  // secili urunu siler
  const handleDelete = (id) => {
    const productsExceptSelected = props.data.filter((urun) => urun.id !== id);
    props.setData(productsExceptSelected);
  };

  return (
    <>
      <div className="absolute top-6 left-6 right-6 bottom-32 lg:bottom-24 overflow-y-auto drop-shadow-md lg:drop-shadow-lg rounded-lg bg-white">
        <table className="w-full divide-y divide-gray-300">
          <thead className="bg-slate-200">
            <tr>
              <th
                scope="col"
                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-800"
              >
                #
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800"
              >
                Ürün
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-800"
              >
                Birim
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800"
              >
                Stok
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-800"
              >
                Fiyat
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-800"
              >
                KDV
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-800"
              >
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData &&
              tableData.length > 0 &&
              tableData.map((item, index) => (
                <tr className="odd:bg-gray-100 even:bg-gray-50" key={item.id}>
                  <td className="px-3 py-4 text-center text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="w-full max-w-0 px-3 py-4 text-sm font-medium text-gray-800 sm:w-auto sm:max-w-none">
                    {item.isim}
                  </td>
                  <td className="hidden lg:table-cell px-3 py-4 text-sm text-gray-500">
                    {item.birim}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    {item.stok}
                  </td>
                  <td className="hidden lg:table-cell px-3 py-4 text-sm text-gray-500">
                    {item.fiyat}₺
                  </td>
                  <td className="hidden lg:table-cell px-3 py-4 text-sm text-gray-500">
                    %{item.kdv}
                  </td>
                  <td className="flex justify-center space-x-3 px-3 py-4 text-sm">
                    <button
                      type="button"
                      onClick={() => handleOpenUpdateDialog(item)}
                      className="lg:border lg:border-indigo-600 text-indigo-500 lg:text-indigo-600 lg:rounded-lg lg:px-2 lg:py-1 bg-transparent"
                    >
                      <PencilAltIcon className="h-5 w-5 lg:hidden" />{" "}
                      <span className="hidden lg:block">Güncelle</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="lg:border lg:border-red-600 text-red-500 lg:text-red-600 lg:rounded-lg lg:px-2 lg:py-1 bg-transparent"
                    >
                      <TrashIcon className="h-5 w-5 lg:hidden" />
                      <span className="hidden lg:block">Sil</span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <FilterOptions
        products={props.data}
        tableData={tableData}
        setTableData={setTableData}
      />
      <DialogModal
        title="Ürün Güncelle"
        text={<UpdateForm data={formData} setData={setFormData} />}
        buttons={[
          {
            label: "Güncelle",
            color: "indigo",
            onClick: () => handleUpdate(selected.id),
          },
        ]}
        icon={{ component: PencilAltIcon, color: "indigo" }}
        show={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default StocksTable;
