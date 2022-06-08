import React, { useEffect, useState } from "react";

const ReportsTabContent = (props) => {
  const [paymentData, setPaymentData] = useState([]);
  const [creditCardPayments, setCreditCardPayments] = useState([]);
  const [cashPayments, setCashPayments] = useState([]);
  const [totalCashPrice, setTotalCashPrice] = useState(0);
  const [totalCreditCardPrice, setTotalCreditCardPrice] = useState(0);

  useEffect(() => {
    setPaymentData(props.data);
  }, [props.data]);

  // odeme islemi gerceklestikce tabloyu gunceller
  useEffect(() => {
    let creditCardPrice = 0;
    const paymentsWithCreditCard = paymentData.filter(
      (el) => el.odemeSekli === "credit-card"
    );
    for (let i = 0; i < paymentsWithCreditCard.length; i++) {
      creditCardPrice += Number(paymentsWithCreditCard[i].tutar);
    }
    setTotalCreditCardPrice(creditCardPrice);
    setCreditCardPayments(paymentsWithCreditCard);
    let cashPrice = 0;
    const paymentsWithCash = paymentData.filter(
      (el) => el.odemeSekli === "cash"
    );
    for (let i = 0; i < paymentsWithCash.length; i++) {
      cashPrice += Number(paymentsWithCash[i].tutar);
    }
    setTotalCashPrice(cashPrice);
    setCashPayments(paymentsWithCash);
  }, [paymentData]);

  return (
    <div className="card w-full h-full p-6">
      <div className="grid grid-cols-4 grid-rows-6 gap-0 w-full h-full rounded-lg border border-gray-200 divide-x divide-gray-400/20 text-sm sm:text-lg lg:text-3xl text-gray-600">
        <div className="h-full min-h-full divide-y divide-gray-400/20 bg-gray-50 rounded-tl-lg">
          <div className="h-full row-span-1"></div>
          <div className="h-full row-span-1 flex items-center justify-center sm:justify-start p-4 lg:p-6 overflow-hidden bg-gray-50">
            <span className="hidden sm:block truncate">Günlük</span>
            <span className="block sm:hidden">1G</span>
          </div>
          <div className="h-full row-span-1 flex items-center justify-center sm:justify-start p-4 lg:p-6 overflow-hidden bg-gray-50">
            <span className="hidden sm:block truncate">Haftalık</span>
            <span className="block sm:hidden">1H</span>
          </div>
          <div className="h-full row-span-1 flex items-center justify-center sm:justify-start p-4 lg:p-6 overflow-hidden bg-gray-50">
            <span className="hidden sm:block truncate">Aylık</span>
            <span className="block sm:hidden">1A</span>
          </div>
          <div className="h-full row-span-1 flex items-center justify-center sm:justify-start p-4 lg:p-6 overflow-hidden bg-gray-50">
            <span className="hidden sm:block truncate">Yıllık</span>
            <span className="block sm:hidden">1Y</span>
          </div>
          <div className="h-full row-span-1 flex items-center justify-center sm:justify-start p-4 lg:p-6 overflow-hidden bg-gray-50">
            <span className="hidden sm:block truncate">Tüm Zamanlar</span>
            <span className="block sm:hidden">TZ</span>
          </div>
        </div>
        <div className="h-full min-h-full divide-y divide-gray-400/20 bg-green-50">
          <div className="h-full row-span-1 bg-green-100">
            <div className="grid grid-rows-2 gap-0 h-full w-full divide-y divide-gray-400/20">
              <div className="flex items-center justify-center p-4 lg:p-6 overflow-hidden bg-amber-100">
                <span className="hidden sm:block truncate">Kredi Kartı</span>
                <span className="block sm:hidden">KK</span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-400/20">
                <div className="flex items-center justify-center p-4 lg:p-6 overflow-hidden bg-amber-100">
                  <span className="hidden sm:block lg:text-2xl truncate">
                    Adet
                  </span>
                  <span className="block sm:hidden">#</span>
                </div>
                <div className="flex items-center justify-center p-4 lg:p-6 overflow-hidden bg-amber-100">
                  <span className="hidden sm:block lg:text-2xl truncate">
                    Tutar (₺)
                  </span>
                  <span className="block sm:hidden">₺</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 overflow-hidden bg-amber-50">
              {creditCardPayments.length}
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 overflow-hidden bg-amber-50">
              {totalCreditCardPrice.toFixed(2)}
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-amber-50">
              0
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-amber-50">
              0
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-amber-50">
              0
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-amber-50">
              0
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-amber-50">
              0
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-amber-50">
              0
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-amber-50">
              {creditCardPayments.length}
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-amber-50">
              {totalCreditCardPrice.toFixed(2)}
            </div>
          </div>
        </div>
        <div className="h-full min-h-full divide-y divide-gray-400/20 bg-green-100">
          <div className="h-full row-span-1 bg-amber-100">
            <div className="grid grid-rows-2 gap-0 h-full w-full divide-y divide-gray-400/20">
              <div className="flex items-center justify-center p-4 lg:p-6 overflow-hidden bg-green-100">
                <span className="hidden sm:block truncate">Nakit</span>
                <span className="block sm:hidden">Nakit</span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-400/20">
                <div className="flex items-center justify-center p-4 lg:p-6 overflow-hidden bg-green-100">
                  <span className="hidden sm:block lg:text-2xl truncate">
                    Adet
                  </span>
                  <span className="block sm:hidden">#</span>
                </div>
                <div className="flex items-center justify-center p-4 lg:p-6 overflow-hidden bg-green-100">
                  <span className="hidden sm:block lg:text-2xl truncate">
                    Tutar (₺)
                  </span>
                  <span className="block sm:hidden">₺</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-green-50">
              {cashPayments.length}
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-green-50">
              {totalCashPrice.toFixed(2)}
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-green-50">
              0
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-green-50">
              0
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-green-50">
              0
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-green-50">
              0
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-green-50">
              0
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-green-50">
              0
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-green-50">
              {cashPayments.length}
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-green-50">
              {totalCashPrice.toFixed(2)}
            </div>
          </div>
        </div>
        <div className="h-full min-h-full divide-y divide-gray-400/20 bg-blue-100 rounded-r-lg">
          <div className="h-full row-span-1 bg-blue-100 rounded-tr-lg">
            <div className="grid grid-rows-2 gap-0 h-full w-full divide-y divide-gray-400/20">
              <div className="flex items-center justify-center p-4 lg:p-6 overflow-hidden bg-blue-100">
                <span className="truncate">Toplam</span>
                <span className="block sm:hidden">Toplam</span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-400/20">
                <div className="flex items-center justify-center p-4 lg:p-6 overflow-hidden bg-blue-100">
                  <span className="hidden sm:block lg:text-2xl truncate">
                    Adet
                  </span>
                  <span className="block sm:hidden">#</span>
                </div>
                <div className="flex items-center justify-center p-4 lg:p-6 overflow-hidden bg-blue-100">
                  <span className="hidden sm:block lg:text-2xl truncate">
                    Tutar (₺)
                  </span>
                  <span className="block sm:hidden">₺</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-blue-50">
              {creditCardPayments.length + cashPayments.length}
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-blue-50">
              {(Number(totalCreditCardPrice) + Number(totalCashPrice)).toFixed(
                2
              )}
            </div>
          </div>
          <div className="h-full vrow-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-blue-50">
              0
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-blue-50">
              0
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-blue-50">
              0
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-blue-50">
              0
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-blue-50">
              0
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-blue-50">
              0
            </div>
          </div>
          <div className="h-full row-span-1 grid grid-cols-2 gap-0 divide-x divide-gray-400/20">
            <div className="flex items-center justify-center p-4 lg:p-6 bg-blue-50">
              {creditCardPayments.length + cashPayments.length}
            </div>
            <div className="flex items-center justify-center p-4 lg:p-6 bg-blue-50">
              {(Number(totalCreditCardPrice) + Number(totalCashPrice)).toFixed(
                2
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsTabContent;
