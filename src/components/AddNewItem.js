import React, { useState } from "react";
import { v4 } from "uuid";

const initialData = {
  id: v4(),
  isim: "",
  fiyat: "",
  kdv: "",
  stok: "",
  birim: "",
  gorsel: "",
};

const AddNewItem = (props) => {
  // const [params, setParams] = useSearchParams();

  const [formData, setFormData] = useState(initialData);

  // yeni urun ekleme formunda kullanici input degisikligi yaptikca form datasini gunceller
  const handleChange = (input, value) => {
    setFormData({ ...formData, [input]: value });
  };

  // yeni urun ekleme formunda kullanicinin girmis oldugu bilgilerle tum urunlerin tutuldugu listeye yeni kayit ekler
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setData([...props.data, formData]);
    setFormData(initialData);
    // const param = params.get("urun-adi");
    // if (param) {
    //   params.delete("urun-adi");
    //   setParams(params);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-10 gap-4 w-full overflow-hidden"
    >
      <div className="lg:col-span-3 grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="urun-adi"
            className="block text-sm font-medium text-gray-700"
          >
            Ürün Adı
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="urun-adi"
              id="urun-adi"
              className="input"
              autoComplete="off"
              required
              value={formData.isim}
              onChange={(e) => handleChange("isim", e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="birim"
            className="block text-sm font-medium text-gray-700"
          >
            Birim
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="birim"
              id="birim"
              className="input"
              autoComplete="off"
              required
              value={formData.birim}
              onChange={(e) => handleChange("birim", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-3 grid grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="fiyat"
            className="block text-sm font-medium text-gray-700"
          >
            Fiyat (₺)
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="fiyat"
              id="fiyat"
              className="input"
              autoComplete="off"
              min={0}
              step="0.01"
              required
              value={formData.fiyat}
              onChange={(e) => handleChange("fiyat", e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="kdv"
            className="block text-sm font-medium text-gray-700"
          >
            KDV (%)
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="kdv"
              id="kdv"
              className="input"
              autoComplete="off"
              min={0}
              step="0.01"
              required
              value={formData.kdv}
              onChange={(e) => handleChange("kdv", e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="stok"
            className="block text-sm font-medium text-gray-700"
          >
            Stok
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="stok"
              id="stok"
              className="input"
              autoComplete="off"
              min={0}
              required
              value={formData.stok}
              onChange={(e) => handleChange("stok", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-3 grid grid-cols-1 gap-4">
        <div>
          <label
            htmlFor="img-src"
            className="block text-sm font-medium text-gray-700"
          >
            Görsel URL
          </label>
          <div className="mt-1">
            <input
              type="url"
              name="img-src"
              id="img-src"
              className="input"
              pattern="https://.*"
              autoComplete="off"
              required
              value={formData.gorsel}
              onChange={(e) => handleChange("gorsel", e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        //onClick={handleSubmit}
        className="py-2 px-3 rounded-lg text-sm font-semibold lg:text-lg text-gray-50 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-300"
      >
        EKLE
      </button>
    </form>
  );
};

export default AddNewItem;
