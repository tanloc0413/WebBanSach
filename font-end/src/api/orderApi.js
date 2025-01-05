import axiosClient from "./axiosClient";

const orderAPi = {

  async get(userId) {
    const url = `orders/${userId}`;
    return await axiosClient.get(url);
  },
};

export default orderAPi;
