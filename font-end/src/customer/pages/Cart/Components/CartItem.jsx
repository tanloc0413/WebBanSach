import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { THUMBNAIL_PLACEHOLDER } from "../../../../constants";
import { formatPrice } from "../../../../utils";
import {  setQuantity, removeFromCart } from "../../../../app/CartSlice";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";

CartItem.propTypes = {};
const useStyles = makeStyles((theme) => ({
  cartItem: {
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 15,
      bottom: 0,
      right: 0,
      height: "1px",
      width: "96%",
      backgroundColor: "#C0C0C0",
    },
  },
}));

function CartItem({ minValue = 1, maxValue = 100, product, quan }) {
  const classes = useStyles();
  const thumbnailUrl = product.imageUrl
    ? product.imageUrl
    : THUMBNAIL_PLACEHOLDER;
  const [quantity, setCount] = useState(quan);
  const dispatch = useDispatch();

  const handleIncrementCounter = () => {
    if (quantity < maxValue) {
      setCount((prevState) => prevState + 1);
      const action = setQuantity({
        id: product.id,
        quantity: quantity + 1,
      });

      dispatch(action);
    }
  };

  const handleDecrementCounter = () => {
    if (quantity > minValue) {
      setCount((prevState) => prevState - 1);
      const action = setQuantity({
        id: product.id,
        quantity: quantity - 1,
      });

      dispatch(action);
    }
  };
  const handleRemoveCartItem = (productId) => {
    const action = removeFromCart({
      id: productId,
    });
    dispatch(action);
  };
  return (
    // alt={product.productName}
    <Box
      className={classes.cartItem}
      sx={{ display: "flex", p: 1, justifyContent: "space-between" }}
    >
      <img src={thumbnailUrl} width="100px" alt="" />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box width="400px">
          <Typography>{product.productName}</Typography>
          <Button
            sx={{ p: 0, minWidth: 0, marginBottom: -14 }}
            onClick={() => handleRemoveCartItem(product.id)}
          >
            Xóa
          </Button>
        </Box>
        <Box sx={{ fontWeight: "800" }}>
          <p> {formatPrice(product.discountedPrice)}</p>
        </Box>
      </Box>
      <Box>
        <div className="btn-group_quantity">
          <button className="decrement-btn" onClick={handleDecrementCounter}>
            <span class="material-symbols-outlined">-</span>
          </button>
          <p>{quantity}</p>
          <button className="increment-btn" onClick={handleIncrementCounter}>
            <span class="material-symbols-outlined">+</span>
          </button>
        </div>
      </Box>
    </Box>
  );
}

export default CartItem;
