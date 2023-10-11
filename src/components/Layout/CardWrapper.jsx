import React from "react";
import Card from "../UI/Card/Card";
import AlertStyle from "../UI/Alert";

const CardWrapper = ({ title, data }) => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center ">
        <h2 className="text-left font-semibold text-[28px]">{title}</h2>
        <span className="px-[4px] py-2 ms-3 hover:bg-blue-gray-50 grid place-content-center">
          <i className="bx bx-chevron-right text-[26px]"></i>
        </span>
      </div>

      <div className="grid  my-6 grid-cols-5 gap-x-8 gap-y-4 ">
        {data?.map((item) => {
          return <Card key={item._id} state={item} />;
        })}
      </div>
    </div>
  );
};

export default CardWrapper;
