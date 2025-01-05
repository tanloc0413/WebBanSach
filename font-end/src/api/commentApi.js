import axiosClient from "./axiosClient";

const commentApi = {
  //   getAll(params) {
  //     const url = 'categories';
  //     return axiosClient.get(url, { params });
  //   },

  //   get(id) {
  //     const url = `/categories/${id}`;
  //     return axiosClient.get(url);
  //   },

  //   async getProucts() {
  //     const url = '/categories/products';
  //     return axiosClient.get(url);
  //   },
  createComment(params) {
    const url = "comments";
    return axiosClient.post(url, params );
  },
  getComments(productId) {
    const url = `comments/product/${productId}`;
    return axiosClient.get(url );
  },
  replyComment(parentId,replyCommentData) {
    const url = `comments/${parentId}/replies`;
    return axiosClient.post(url,replyCommentData );
  },
  
};

export default commentApi;
