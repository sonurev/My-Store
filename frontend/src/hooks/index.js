import axios from "axios";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { productsState, wishlistState } from "../store/atoms";

export const useProducts = () => {
    
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useRecoilState(productsState);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                console.log(response.data.products);
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        products
    };
};


export const useWishlist = ()=>{

    const[loading,setLoading]=useState(true);
    const[wishlist,setWishlist]=useRecoilState(wishlistState);

    useEffect(() => {
        axios.get("http://localhost:8000/api/wishlist/")
            .then(response => {
                console.log(response.data);
                setWishlist(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching wishlist:", error);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        wishlist
    };
 
}