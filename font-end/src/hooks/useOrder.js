import { useEffect, useState } from "react";
import orderAPi from "../api/orderApi";

export default function useOrder(userId) {
    const [orders,setOrders] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const res = await orderAPi.get(userId);
                console.log('Loi lay ds orders',res);
                setOrders(res);
            } catch(error) {
                console.log('Loi lay ds orders',error);
            }
        })()
    },[userId])

    return orders;
}