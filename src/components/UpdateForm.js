import React from "react";

const UpdateForm = (props) => {
  // urun guncelleme formunda kullanici input degisikligi yaptikca form datasini gunceller
  const handleChange = (input, value) => {
    props.setData({ ...props.data, [input]: value });
  };
  return (
    <form className="grid grid-cols-1 gap-4 w-full overflow-hidden">
      <div className="grid grid-cols-2 gap-4">
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
              value={props.data.isim}
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
              value={props.data.birim}
              onChange={(e) => handleChange("birim", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
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
              value={props.data.fiyat}
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
              value={props.data.kdv}
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
              value={props.data.stok}
              onChange={(e) => handleChange("stok", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
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
              value={props.data.gorsel}
              onChange={(e) => handleChange("gorsel", e.target.value)}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateForm;
