import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import ProductCard from "../../../components/ProductCard/ProductCard.jsx";

List.propTypes = {
  data: PropTypes.array,
};

List.defaultProps = {
  data: [],
};

function List({ data }) {
  return (
    <Box p={1}>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default List;
