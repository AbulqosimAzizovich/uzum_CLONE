import React from "react";
import Card from "../UI/Card/Card";

const CardWrapperSl = ({  data }) => {
  return (
    <div className="flex  w-full overflow-x-scroll gap-4">
      {data?.map((item) => {
        return <Card key={item._id} state={item} />;
      })}       
    </div>
  );
};

export default CardWrapperSl;
