import {useRef} from "react";
import {Link} from "react-router-dom";
import useProductApi from "../../../service/product/useProductApi";
import {Toast} from "primereact/toast";

const Card = ({state: {name, price, slugify, images, count, colors, units, createdAt, status}}) => {
    const {addToCartFunc} = useProductApi;

    const toast = useRef(null);

    const showSuccess = () => {
        toast.current.show({severity: "success", summary: "Savatga qo'shildi", detail: name, life: 3000});
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

    return (
        <div className="card max-w-[232px] h-[456px] font-[Inter] mx-auto  hover:shadow-md duration-500 border">
            <Toast ref={toast} />
            <Link to={`/product/${slugify}`}>
                <div className="relative">
                    <img src={`https://image.minibox.uz${images[0]}`} alt="" className="min-h-[310px] object-contain" />
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path
                                d="M7.00002 10.1342L10.605 12.31L9.64835 8.20918L12.8334 5.45002L8.63919 5.09418L7.00002 1.22668L5.36085 5.09418L1.16669 5.45002L4.35169 8.20918L3.39502 12.31L7.00002 10.1342Z"
                                fill="#F5A623"
                            />
                        </svg>
                    </a>
                    <p className="text-[#8A8D93] text-[11.2px]">5.0</p>
                    <p className="text-[#8A8D93] text-[11.2px]">({count} ta sotuvda bor)</p>
                </div>
                <a
                    className="text-[11px] leading-[17px] text-[#1F1F26] px-[5px] bg-[#FF0] rounded h-[17px] mt-[11px] "
                    href="#"
                >
                    {String(Math.floor(price / 3)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm/oyiga
                </a>
                <div className="flex items-center justify-between h-[34px]">
                    <div>
                        <sub className="text-[11.2px] text-[#757575]">
                            <del>
                                {String(Math.floor(price + price * 0.12)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
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
