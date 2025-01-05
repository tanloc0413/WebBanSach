import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Container, Grid, Pagination, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import productApi from "../../../api/productApi";
import LoadingProducts from "./components/Loading";
import List from "./components/List";
import Sort from "./components/Sort";
import Filters from "./components/Filters";
import { Link, useMatch } from "react-router-dom";
// import { useNavigate, useLocation } from "react-router-dom";
// import queryString from "query-string";

const useStyles = makeStyles((theme) => ({
  root: { padding: "20px 0px", backgroundColor: "#f4f4f4" },

  left: { width: "250px" },
  right: { flex: "1 1 0" },
  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    marginTop: "20px",
    paddingBottom: "10px",
  },
  breadcrumb: { marginBottom: "20px" },
}));

function ProductList(props) {
  const classes = useStyles();
  let categoryName;
  // const navigate = useNavigate();
  // const location = useLocation();
  // const queryParams = queryString.parse(location.search);
  const match = useMatch("/categories/:categoryName");
  if (match) {
    const {
      params: { categoryName: matchedCategoryName },
    } = match;
    categoryName = matchedCategoryName;
  }

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    // _page: 1,
    // _limit: 12,
    category: decodeURIComponent(categoryName),
    sort: "ASC",
    page: 1,
  });
  // const [filters, setFilters] = useState(() => ({
  //   ...queryParams,
  //   _page: queryParams._page || 1,
  //   _limit: queryParams._limit || 10,
  //   _sort: queryParams._sort || "salePrice:ASC",
  // }));
  const [pagination, setPagination] = useState({
    count: 12,
    page: 1,
  });

  //  useEffect(() => {
  //   if (navigate && navigate.location) {
  //     navigate.push({
  //       pathname: navigate.location.pathname,
  //       search: queryString.stringify(filters),
  //     });
  //   }
  // }, [navigate, filters]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getProductsByCategory(
          filters
        );
        setProductList(data);
        setPagination(pagination);
        console.log('data',data);
        console.log("=====================");
        console.log('pagination',pagination);
      } catch (error) {
        console.log("Loi product list: ", error);
      }
      setLoading(false);
    })();
  }, [filters]);
  const handlePanigation = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: page,
    }));
  };
  const handleSort = (newValueSort) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sort: newValueSort,
    }));
  };
  const handleFilters = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.breadcrumb}>
          <Breadcrumbs maxItems={2} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="#">
              Trang chủ
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Danh sách sản phẩm
            </Link>
          </Breadcrumbs>
        </Box>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <Filters filters={filters} onChange={handleFilters} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <Sort currentSort={filters.sort} onChange={handleSort}></Sort>
              {loading ? <LoadingProducts /> : <List data={productList} />}
              <Box className={classes.pagination}>
                <Pagination
                  count={pagination.count}
                  page={pagination.page}
                  shape="rounded"
                  onChange={handlePanigation}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductList;
