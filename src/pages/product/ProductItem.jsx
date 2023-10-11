import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useProductApi from "../../service/product/useProductApi";
import Breadcrumb from "../../components/UI/Breadcrumbs/Breadcrumb";
import ProductCarousel from "../../components/UI/Carousel/ProductCarousel";
import useLikeStore from "../../store/useLikeStore";
import { Toast } from "primereact/toast";
import { TooltipWithHelperIcon } from "./../../components/UI/Tooltip/Tooltip";
import Counter from "../../components/UI/Counter";

const ProductItem = () => {
  let [product, setProduct] = useState([]);
  let { slug } = useParams();
  const [isLike, setIsLike] = useState(false);
  const [selected, setSelected] = useState(false);

  const { likeProd } = useLikeStore();

  const toast = useRef(null);

  const state = () => {
    useProductApi.getOneItem(slug).then((res) => {
      setProduct(res.data[0]);
    });
  };

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Tanlandi",
      detail: product.name,
      life: 3000,
    });
  };

  const showWarn = () => {
    toast.current.show({
      severity: "error",
      summary: "Diqqat",
      detail: "Mahsulot o'chirildi ",
      life: 3000,
    });
  };

  const setLikeFun = () => {
    console.log("ok");

    JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.find((item, index) => {
      console.log(item);

      if (item._id == product._id) {
        let local = JSON.parse(localStorage.getItem("LIKE_COLLECTION"));
        local.splice(index, 1);
        localStorage.setItem("LIKE_COLLECTION", JSON.stringify(local));
        showWarn();
        console.log("local:", local);
        console.log("DELETED");
        setIsLike(false);
      } else {
        setIsLike(true);
        console.log("OK 2");
        JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.find((item) => {
          if (item._id != product._id) {
            setSelected(true);
            likeProd(product);
            console.log("ADDED 2");
            setIsLike(true);
          } else {
            setSelected(false);
            console.log("DLETEED 2");
            setIsLike(true);
          }
        });
      }
    });

    if (!isLike) {
      showSuccess();
    }

    if (!JSON.parse(localStorage.getItem("LIKE_COLLECTION"))) {
      likeProd(product);
    }
  };

  useEffect(() => {
    state();

    JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.forEach((item) => {
      if (item._id == product._id) {
        setIsLike(true);
      }
    });

    console.log(JSON.parse(localStorage.getItem("LIKE_COLLECTION")));

    console.log(selected);
  }, [slug, product._id]);

  return (
    <section id="item" className="py-8">
      <Toast ref={toast} />
      <div className="container mx-auto">
        <Breadcrumb product={product} />
      </div>

      <div className="container mx-auto">
        <div className="flex  gap-x-20 pt-6">
          <div className="w-[508px] h-[554px]">
            <ProductCarousel image={product.images} />
          </div>

          <div className="info grow px-8 pb-8">
            <div className="flex justify-between">
              <span>{product.count} sotuvda bor</span>
              <button
                onClick={() => setLikeFun()}
                className="flex items-center h-[24px] gap-[10px]"
              >
                <span>
                  {!isLike ? (
                    <i className="pi pi-heart text-md mt-1"></i>
                  ) : (
                    <i className="pi pi-heart-fill text-md mt-1"></i>
                  )}
                </span>
                <div>
                  {!isLike ? (
                    <p className="text-md">Tanlash</p>
                  ) : (
                    <p className="text-md">Tanlangan</p>
                  )}{" "}
                </div>
              </button>
            </div>
            <h2 className="mt-3 text-[22px]">{product.name}</h2>
            <span className="flex items-center gap-[93.39px] text-[14px] mt-2 mb-2">
              Sotuvchi: <p> Sunnatbek</p>
            </span>
            <span className="flex items-center  text-[14px]">
              Yetkazib berish: <TooltipWithHelperIcon />
              <p className="ml-[30px]">1 kun, bepul</p>
            </span>
            <div className="w-full flex flex-col gap-y-6">
              <div className="border-b-[1px] border-b-[#76797F33] h-[25px] w-full"></div>
              <div className="flex flex-col items-start gap-y-2 w-full pl-[5px] justify-center ">
                <p>Rang:</p>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[56px] h-[72px] rounded-[4px] p-1 border-[1px] border-[rgba(0,0,0,0.20)]"></div>
                  <div className="w-[56px] h-[72px] rounded-[4px] p-1 border-[1px] border-[rgba(0,0,0,0.20)]"></div>
                  <div className="w-[56px] h-[72px] rounded-[4px] p-1 border-[1px] border-[rgba(0,0,0,0.20)]"></div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-2 w-full pl-[5px] justify-center">
                <p>Miqdor:</p>
                <div className="flex items-center">
                  
                  <Counter />
                  <span className="text-[14px] text-[#00C853] ml-4">
                    Sotuvda {product.count} dona bor
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-2 w-full pl-[5px] justify-center">
                <p>Narx:</p>
                <div className="flex items-center justify-start gap-x-[21.23px]">
                  <span className="text-[20px] font-medium">
                    {String(
                      Math.floor(product.price + product.price * 0.12)
                    ).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                    so'm
                  </span>
                  <span className="text-[14px] text-[#8A8D93] line-through">
                    {String(product.price).replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      " "
                    )}{" "}
                    so'm
                  </span>
                  <span className="bg-[#AAFF77] rounded px-[6px] text-[13px] font-medium">
                    Katta sotuvlar
                  </span>
                </div>
              </div>
              <div className="p-3 bg-[#F5F6FA] rounded-xl flex items-center justify-between cursor-pointer">
                <span className="flex items-center justify-start text-[14px] font-medium">
                  <span className="bg-[#FFFF00] text-[14px] font-semibold rounded-lg px-[6px] mr-[5px]">
                    Oyiga{" "}
                    {String((product.price / 12) * 1.2).replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      " "
                    )}
                    so'mdan
                  </span>
                  muddatli to'lov
                </span>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.4286 12C15.4286 12.3148 15.2583 12.4282 15.0436 12.6262L9.85718 17.4208C9.6885 17.5882 9.53241 17.7857 9.19427 17.7857C8.9565 17.7857 8.57147 17.6016 8.57147 17.0993C8.57147 16.7879 8.82364 16.6415 9.00004 16.4665L13.8148 12L8.99335 7.52679C8.82467 7.35177 8.56812 7.22211 8.56812 6.85715C8.56812 6.5692 8.79244 6.21429 9.25118 6.21429C9.50421 6.21429 9.73538 6.45201 9.90407 6.61943L15.0436 11.3572C15.2583 11.5626 15.4286 11.6853 15.4286 12Z"
                      fill="#76797F"
                      fill-opacity="0.6"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <button className="font-semibold text-white bg-[#7000FF] rounded-xl px-[95.65px] py-[18px]">
                  Savatga qoʻshish
                </button>
                <button className="font-semibold text-[#7000FF] border-[1px] border-[#7000FF] px-[40.6px] py-[18px] rounded-xl">
                  Tugmani 1 bosishda xarid qilish
                </button>
              </div>
              <div className="bg-[#FFE4334D] rounded-lg flex items-center justify-start pl-[32px] gap-x-[5px] text-[14px] py-[6.5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.4099 4.5C12.6501 4.5 11.4099 5.88779 11.4099 7.5H17.4099C17.4099 5.88779 16.1697 4.5 14.4099 4.5ZM9.90991 11.5V9H7.90991V14.25C7.90991 14.6642 7.57412 15 7.15991 15C6.74569 15 6.40991 14.6642 6.40991 14.25V8.25V7.5H7.15991H9.90991C9.90991 5.11221 11.7697 3 14.4099 3C17.0501 3 18.9099 5.11221 18.9099 7.5H21.6599H22.4099V8.25V21.75C22.4099 22.9926 21.4025 24 20.1599 24H15.6599C15.2457 24 14.9099 23.6642 14.9099 23.25C14.9099 22.8358 15.2457 22.5 15.6599 22.5H20.1599C20.5741 22.5 20.9099 22.1642 20.9099 21.75V9H18.9099V11.5H17.4099V9H11.4099V11.5H9.90991ZM14.6837 18.0323C14.9766 17.7395 14.9766 17.2646 14.6837 16.9717C14.3908 16.6788 13.9159 16.6788 13.623 16.9717L8.40539 22.1893L6.19026 19.9742C5.89736 19.6813 5.42248 19.6813 5.12958 19.9741C4.83669 20.267 4.83668 20.7419 5.12957 21.0348L7.87504 23.7803C8.0157 23.921 8.20646 24 8.40538 24C8.60429 24 8.79506 23.921 8.93571 23.7803L14.6837 18.0323Z"
                    fill="#141415"
                  />
                </svg>
                <p>Bu haftada 2092 kishi sotib oldi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
