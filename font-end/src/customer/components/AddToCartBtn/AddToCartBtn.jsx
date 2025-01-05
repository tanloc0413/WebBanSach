import React, { useState } from "react";
import "./AddToCartBtn.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../app/CartSlice";

const AddToCartBtn = ({ minValue = 1, maxValue = 100, product }) => {
  const [quantity, setCount] = useState(minValue);
  const dispatch = useDispatch();
  const handleIncrementCounter = () => {
    if (quantity < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleDecrementCounter = () => {
    if (quantity > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };
  const handleAddToCartSubmit = () => {
    // console.log('id:',product.id )
    // console.log('product:',product)
    // console.log('quantity:',quantity)
    const action = addToCart({
      id: product.id,
      product,
      quantity
    });
    
    // console.log('action:',action)
    dispatch(action);
  };
  return (
    <>
    
      <div className="btn-group_quantity">
        <button className="decrement-btn" onClick={handleDecrementCounter}>
          <span class="material-symbols-outlined">-</span>
        </button>
        <p>{quantity}</p>
        <button className="increment-btn" onClick={handleIncrementCounter}>
          <span class="material-symbols-outlined">+</span>
        </button>
      </div>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "250px" }}
        size="large"
        onClick={handleAddToCartSubmit}
      >
        Thêm vào giỏ hàng
      </Button>
    </>
  );
};

export default AddToCartBtn;
