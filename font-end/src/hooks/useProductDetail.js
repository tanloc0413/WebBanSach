import { useEffect, useState } from "react";
import productApi from "../api/productApi";

export default function useProductDetail(productId) {
    const [product,setProduct] = useState({});
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await productApi.get(productId);
                setProduct(res);
                setLoading(false);
            } catch(error) {
                console.log('Loi lay chi tiet san pham',error);
            }
        })()
    },[productId])

    return { product, loading };
}