import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { formatPrice, promotionPercent } from "../../../../utils";
import { makeStyles } from "@mui/styles";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "12px",
    borderBottom: `1px solid grey`,
  },

  priceBox: {
    padding: "20px",
    backgroundColor: "#efefef",
  },

  salePrice: {
    marginRight: "18px",
    fontSize: "33px",
    fontWeight: "bold",
  },

  originalPrice: {
    marginRight: "12px",
    textDecoration: "line-through",
  },
  promotionPercent: {
    color: "red",
  },
  description: {
    height: "80px",
  },
}));

function ProductInfo({ product = {} }) {
  const classes = useStyles();
  const { productName, description, price, discountedPrice } = product;

  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {productName}
      </Typography>

      <Typography
        variant="body2"
        className={classes.description}
        style={{ margin: "5px 0px" }}
      >
        {description}
      </Typography>

      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(discountedPrice)}
        </Box>

        {discountedPrice > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(price)}
            </Box>

            <Box
              component="span"
              className={classes.promotionPercent}
            >{`- ${promotionPercent(price, discountedPrice)}%`}</Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
