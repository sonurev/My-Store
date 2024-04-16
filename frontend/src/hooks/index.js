import axios from "axios";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { productsState } from "../store/atoms";

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
