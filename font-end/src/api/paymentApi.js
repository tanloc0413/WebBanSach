import axiosClient from "./axiosClient";

const paymentApi = {
  // async payment(
  //   userId,
  //   customerName,
  //   customerEmail,
  //   customerMobile,
  //   shippingAddress,
  //   orderItems,
  //   totalPrice,
  //   orderInfo
  // ) {
  //   const params = {
  //     userId: userId,
  //     customerName: customerName,
  //     customerEmail: customerEmail,
  //     customerMobile: customerMobile,
  //     shippingAddress: shippingAddress,
  //     orderItems: orderItems,
  //     totalPrice: totalPrice,
  //     orderInfo: orderInfo
  //   };
  //   const res = await axiosClient.get("payment/create-order", { params });

  //   return res;
  // },
  async payment( orderTotal, orderInfor) {
    const params = {
      orderTotal: orderTotal,
      orderInfor: orderInfor,
    };
    const res = await axiosClient.get("payment/create-order", { params });

    return res;
  },
  async paymentResult(params) {
    const url = `payment/vnpay-payment-return?${params}`;
    console.log("url: ", url);
    const res = await axiosClient.get(url);
    console.log("res: ", res);

    return res;
  },
};

export default paymentApi;
