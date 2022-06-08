import React, { useState } from "react";
import data from "../../data/products.json";
import Tabs from "./sections/tabList/Tabs";
import HomeTabContent from "./sections/tabContents/home/HomeTabContent";
import StocksTabContent from "./sections/tabContents/stocks/StocksTabContent";
import ReportsTabContent from "./sections/tabContents/reports/ReportsTabContent";
import { Tab } from "@headlessui/react";

const Home = () => {
  const [productData, setProductData] = useState(data.products); // tum urunlerin datasi
  const [payments, setPayments] = useState([]); // odeme verileri

  return (
    <Tab.Group>
      <div className="grid grid-rows-10 lg:grid-rows-8 gap-4 lg:gap-6 w-full h-full max-h-full overflow-hidden">
        <Tabs />
        <Tab.Panel className="row-span-9 lg:row-span-7 flex flex-col space-y-6 h-full w-full">
          <HomeTabContent
            data={productData}
            setData={setProductData}
            payments={payments}
            setPayments={setPayments}
          />
        </Tab.Panel>
        <Tab.Panel className="row-span-9 lg:row-span-7 flex flex-col space-y-6 h-full w-full">
          <StocksTabContent data={productData} setData={setProductData} />
        </Tab.Panel>
        <Tab.Panel className="row-span-9 lg:row-span-7 h-full w-full">
          <ReportsTabContent data={payments} setData={setPayments} />
        </Tab.Panel>
      </div>
    </Tab.Group>
  );
};

export default Home;
