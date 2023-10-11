import { useRef } from "react";
import { Link } from "react-router-dom";
import useProductApi from "../../../service/product/useProductApi";
import { Toast } from "primereact/toast";

const Card = ({
  state: {
    name,
    price,
    slugify,
    images,
    count,
    colors,
    units,
    createdAt,
    status,
  },
}) => {
  const { addToCartFunc, addToWishesFunc } = useProductApi;

  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Savatga qo'shildi",
      detail: name,
      life: 3000,
    });
  };

  const showSuccess1 = () => {
    toast.current.show({
      severity: "success",
      summary: "Saralanganlarga qo'shildi",
      detail: name,
      life: 3000,
    });
  };

  const addToCart = async () => {
    const res = await addToCartFunc({
      name,
      price,
      slugify,
      images,
      count,
      colors,
      units,
      createdAt,
      status,
    });
    console.log(res.data);
    showSuccess();
  };

  const addToWishes = async () => {
    const wRes = await addToWishesFunc({
      name,
      price,
      slugify,
      images,
      count,
      units,
      createdAt,
      status,
    });

    console.log(wRes.data);

    showSuccess1();
  };

  return (
    <div className="card max-w-[232px] h-[456px] font-[Inter] mx-auto  hover:shadow-md duration-500 border relative">
      <button
        className="absolute z-20 right-3 top-3"
        onClick={() => addToWishes()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M5.95 2.29999C8.51792 2.29999 10 4.45233 10 4.45233C10 4.45233 11.485 2.29999 14.05 2.29999C16.705 2.29999 19 4.36999 19 7.24999C19 11.4805 12.5604 15.9197 10.3651 17.8603C10.1582 18.0432 9.84179 18.0432 9.63488 17.8603C7.44056 15.9209 1 11.4803 1 7.24999C1 4.36999 3.295 2.29999 5.95 2.29999Z"
            fill="white"
            fill-opacity="0.8"
          />
          <path
            d="M1 7.16485C1 4.50296 3.15017 2.29999 5.86486 2.29999C7.98685 2.29999 9.35921 3.65875 10 4.48672C10.6408 3.65875 12.0132 2.29999 14.1351 2.29999C16.8506 2.29999 19 4.50301 19 7.16485C19 8.32986 18.5328 9.48621 17.8534 10.565C17.1716 11.6476 16.252 12.6903 15.29 13.6377C13.9567 14.9508 12.4757 16.1387 11.4134 16.9907C10.9618 17.3529 10.5859 17.6544 10.3293 17.879C10.1407 18.0439 9.85926 18.0439 9.67075 17.879C9.41405 17.6544 9.03815 17.3529 8.58659 16.9907C7.52431 16.1387 6.04326 14.9508 4.70997 13.6377C3.74802 12.6903 2.82836 11.6476 2.14659 10.565C1.46724 9.48621 1 8.32986 1 7.16485ZM5.86486 3.29999C3.70929 3.29999 2 5.04837 2 7.16485C2 8.06742 2.36553 9.03606 2.99277 10.0321C3.61759 11.0242 4.47833 12.006 5.41165 12.9252C6.71033 14.2042 8.08423 15.305 9.13396 16.1461C9.45728 16.4052 9.74985 16.6396 10 16.847C10.2501 16.6396 10.5427 16.4052 10.866 16.1461C11.9158 15.305 13.2897 14.2042 14.5883 12.9252C15.5217 12.006 16.3824 11.0242 17.0072 10.0321C17.6345 9.03606 18 8.06742 18 7.16485C18 5.04832 16.2914 3.29999 14.1351 3.29999C12.0406 3.29999 10.8181 5.0021 10.5033 5.51027C10.2727 5.88249 9.72727 5.88248 9.4967 5.51026C9.1819 5.00209 7.95944 3.29999 5.86486 3.29999Z"
            fill="#15151A"
          />
        </svg>
      </button>
      <Toast ref={toast} />
      <Link to={`/product/${slugify}`}>
        <div className="relative">
          <img
            src={`https://image.minibox.uz${images[0]}`}
            alt=""
            className="min-h-[310px] object-contain"
          />
        </div>
      </Link>
      <div className="content pt-[11px] pl-2 pr-2">
        <Link to={`/product/${slugify}`}>
          <h3 className="text-[12.8px] leading-[15.36px] mt-[11px]">
            {name.length > 25 ? name.substring(0, 25) + "..." : name}
          </h3>
        </Link>
        <div className="flex gap-x-1 mt-[6px]">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M7.00002 10.1342L10.605 12.31L9.64835 8.20918L12.8334 5.45002L8.63919 5.09418L7.00002 1.22668L5.36085 5.09418L1.16669 5.45002L4.35169 8.20918L3.39502 12.31L7.00002 10.1342Z"
                fill="#F5A623"
              />
            </svg>
          </a>
          <p className="text-[#8A8D93] text-[11.2px]">5.0</p>
          <p className="text-[#8A8D93] text-[11.2px]">
            ({count} ta sotuvda bor)
          </p>
        </div>
        <a
          className="text-[11px] leading-[17px] text-[#1F1F26] px-[5px] bg-[#FF0] rounded h-[17px] mt-[11px] "
          href="#"
        >
          {String(Math.floor(price / 3)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
          so'm/oyiga
        </a>
        <div className="flex items-center justify-between h-[34px]">
          <div>
            <sub className="text-[11.2px] text-[#757575]">
              <del>
                {String(Math.floor(price + price * 0.12)).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  "."
                )}{" "}
                so'm
              </del>
            </sub>

            <p className="leading-[16.8px] font-medium text-[14px] ">
              {String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm
            </p>
          </div>
          <div
            className="p-1 rounded-full border-2 border-[#D0D2D9] flex items-center justify-center cursor-pointer"
            onClick={() => addToCart()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M8 10.3401V8.34009H6V12.8401C6 13.1162 5.77614 13.3401 5.5 13.3401C5.22386 13.3401 5 13.1162 5 12.8401V7.34009H8C8 4.93637 9.95227 3.34009 12 3.34009C14.0575 3.34009 16 5.04565 16 7.34009H19V19.8401C19 20.6685 18.3284 21.3401 17.5 21.3401H12.5C12.2239 21.3401 12 21.1162 12 20.8401C12 20.564 12.2239 20.3401 12.5 20.3401H17.5C17.7761 20.3401 18 20.1162 18 19.8401V8.34009H16V10.3401H15V8.34009H9V10.3401H8ZM12 4.34009C10.4477 4.34009 9 5.54381 9 7.34009H15C15 5.63453 13.5425 4.34009 12 4.34009Z"
                fill="#15151A"
              />
              <path
                d="M7.5 14.3401C7.77614 14.3401 8 14.564 8 14.8401V17.3401H10.5C10.7761 17.3401 11 17.564 11 17.8401C11 18.1162 10.7761 18.3401 10.5 18.3401H8V20.8401C8 21.1162 7.77614 21.3401 7.5 21.3401C7.22386 21.3401 7 21.1162 7 20.8401V18.3401H4.5C4.22386 18.3401 4 18.1162 4 17.8401C4 17.564 4.22386 17.3401 4.5 17.3401H7V14.8401C7 14.564 7.22386 14.3401 7.5 14.3401Z"
                fill="#15151A"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
