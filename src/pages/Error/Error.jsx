import React from "react";
import Cat from "../../assets/cat.png";
import { Link, Navigate } from "react-router-dom";

const Error = () => {

  return (
    <div className="flex flex-col gap-[24px] items-center justify-center mb-5 mx-auto">
      <img src={Cat} alt="Cat" />
      <h1>Savatda hozircha mahsulot yoʻq</h1>
      <p>
        Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv
        orqali toping
      </p>
      <Link  to='/' className="py-[10.5px] px-[13px] rounded-[4px] bg-[#6E00FF] text-white">
        Bosh sahifa
      </Link>
    </div>
  );
};

export default Error;
