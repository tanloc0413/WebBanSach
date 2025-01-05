import { useEffect, useState } from "react";
import productApi from "../api/productApi";
import commentApi from "../api/commentApi";

export default function useComments(productId) {
    const [comments,setComments] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const res = await commentApi.getComments(productId);
                console.log('Loi lay ds comments',res);
                setComments(res);
            } catch(error) {
                console.log('Loi lay ds comments',error);
            }
        })()
    },[productId])

    return comments;
}