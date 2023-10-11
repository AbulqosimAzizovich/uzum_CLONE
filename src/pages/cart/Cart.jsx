import { useEffect, useState } from "react";
import useProductApi from "../../service/product/useProductApi";
import CartItem from "../../components/UI/CartItem";

const Cart = () => {
  const { getAllProductsFromCart } = useProductApi;
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllProductsFromCart()
      .then((res) => {
        setData(res.data);
      })
      .catch();
  }, [data]);

  let price = 0;
  return (
    <div className="container mx-auto mt-[50px]">
      <div>
        <h2 className="text-[24px] mb-7">
          Savatingiz:
          <span className="ml-[8px] text-gray-600">
            <strong>{data?.length}</strong> mahsulot
          </span>
        </h2>
        <div className="flex items-start gap-[12px]">
          <div className="border border-1 max-w-[1000
            px] w-full p-4 pb-0 rounded-lg">
            <div className="flex items-center justify-between mb-[20px]">
              <div className="flex items-center gap-2">
                <input className="cursor-pointer" id="check" type="checkbox" />
                <label
                  className="text-[13px] select-none cursor-pointer"
                  htmlFor="check"
                >
                  Hammasini tanlash
                </label>
              </div>
              <p className="text-[13px] text-gray-600">
                Yetkazib berishning eng yaqin sanasi:{" "}
                <span className="ml-[8px] border border-[#7000ff] text-[#7000ff] py-[2px] px-[6px] rounded-sm text-[12px]">
                  M10 7 (Bugun)
                </span>
              </p>
            </div>
            <div>
              {data.length > 0
                ? data?.map((item, index) => (
                    <CartItem key={index} item={item} />
                  ))
                : "Loading..."}
            </div>
          </div>
          <div className="border border-1 p-[20px] flex-grow rounded-lg">
            <div className="flex items-start">
              <div className="w-[32px] h-[32px] grid place-items-center border-[2px] border-green-600 rounded-full mr-[16px]">
                <img src="" alt="" />
              </div>
              <div className="flex flex-col gap-y-[7px] w-[226px]">
                {price >= 500000 ? (
                  <>
                    <h2 className="text-[14px] leading-[18px]">
                      Siz uchun eshikkacha
                      <strong className="ml-[5px]">
                        bepul yetkazib berish mavjud
                      </strong>
                    </h2>
                    Tanlovingizga ko'ra tez yetkazib berish
                    <p className="leading-[18px] text-[12.8px] text-[62656A]"></p>
                  </>
                ) : (
                  <>
                    <h2 className="text-[14px] leading-[18px]">
                      <strong className="mr-[5px]">
                        Buyurtmangizni rasmiy topshirish
                      </strong>
                      punktiga bepul yetkazib beramiz
                    </h2>
                    <p className="leading-[18px] text-[12.8px] text-[62656A]">
                      Eshikkacha yetkazib berishgacha yana {} so'm
                    </p>
                  </>
                )}
              </div>
            </div>

            <span className="w-full h-[1px] mt-4 mb-2 bg-[#0000001f]"></span>
            <div className="flex flex-col items-start">
              <h2 className="mb-[18px] text-[#212121] font-medium">
                Buyurtmangiz
              </h2>
              <p className="text-[14px] flex items-center justify-between w-full mb-[10px]">
                Mahsulotlar ({data?.length}): <span>{} so'm</span>
              </p>
              <span className="w-full border border-[#7000ff] text-[#7000ff] mb-4 px-[6px] py-[2px] text-[12px] font-bold text-center">
                Yetkazib berish M10 7 (Bugun)
              </span>
              <div className="flex items-start w-full justify-between flex-col">
                <div className="flex items-center justify-between w-full">
                  <p className="text-[14px]">Jami:</p>
                  <h3 className="text-[20px] font-medium">{price} so'm </h3>
                </div>
                <span className="text-[#00c853] text-[12px] w-full mb-[15px] text-end">
                  Tejovingiz:{price} so'm
                </span>
              </div>
              <button className="grid place-content-center w-full h-[44px] rounded-lg bg-[#7000ff] text-white  mx-[2px]">
                Rasmiylashtirishga o'tish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
