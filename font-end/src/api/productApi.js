import axiosClient from './axiosClient';

const productApi = {
  async getProductsByCategory(params) {
    // const newParams = { ...params };
    // newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
    // delete newParams._page;

    // const productList = await axiosClient.get('/findByCategory', { params: newParams });
    // const count = await axiosClient.get('/products/count', { params: newParams });

    const newParams = { ...params };
    newParams.category = params.category? params.category : '';
    newParams.minPrice = params.minPrice? params.minPrice : 0;
    newParams.maxPrice = params.maxPrice? params.maxPrice : 10000000;
    newParams.sort = params.sort? params.sort.toString() : 'ASC';
    newParams.page = params.page? params.page : 1;
    newParams.limit = 12;

    // delete newParams._page;

    const res = await axiosClient.get('products', { params: newParams });

    return {
      data: res.content,
      pagination: {
        count: res.totalPages,
        page: newParams.page
      },
    };
  },
  async getProductsByName(params) {
    // const newParams = { ...params };
    // newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
    // delete newParams._page;

    // const productList = await axiosClient.get('/findByCategory', { params: newParams });
    // const count = await axiosClient.get('/products/count', { params: newParams });

    const newParams = { ...params };
    newParams.productName = params.productName? params.productName : '';
    newParams.minPrice = params.minPrice? params.minPrice : 0;
    newParams.maxPrice = params.maxPrice? params.maxPrice : 10000000;
    newParams.sort = params.sort? params.sort.toString() : 'ASC';
    newParams.page = params.pageNumber? params.pageNumber : 0;
    newParams.limit = 12;

    // delete newParams._page;

    const res = await axiosClient.get('products/name', { params: newParams });

    return {
      data: res.content,
      pagination: {
        count: res.totalPages,
        page: params.page
      },
    };
  },
  get(productId) {
    const url = `/products/${productId}`;
    return axiosClient.get(url);
  },
  getProductNameSuggest(suggest) {
    suggest = suggest? suggest : "dghfjrkoshsjsk";
    console.log('suggest: ', suggest);
    const url = `/products/suggest/${suggest}`;
    return axiosClient.get(url);
  }
};

export default productApi;