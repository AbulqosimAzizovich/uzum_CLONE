import {useState, useEffect} from "react";

const useLikeStore = () => {
    const likeProd = (product) => {
        const likedProducts = JSON.parse(localStorage.getItem("LIKE_COLLECTION"));

        if (!likedProducts) {
            localStorage.setItem("LIKE_COLLECTION", JSON.stringify([product]));
        }

        if (likedProducts.find((pr) => pr._id === product._id)) {
            console.log("bor");
        } else {
            localStorage.setItem("LIKE_COLLECTION", JSON.stringify([...likedProducts, product]));
        }
        
    };

    return {likeProd};
};

export default useLikeStore;
