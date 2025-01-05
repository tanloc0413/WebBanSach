import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CartItem from "./Components/CartItem";
import { cartSelector, cartTotalSelector } from "../../../app/Selectors";
import { formatPrice } from "../../../utils";
import { useNavigate } from "react-router-dom";

Cart.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: { padding: "30px 0px", backgroundColor: "#f4f4f4", height: '500px' },
  left: { width: "65%" },
  right: { width: "33%" },
  breadcrumb: { marginBottom: "20px" },
  cartTitle: {
    position: "relative",
    marginBottom: '20px',
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      right: 0,
      height: "1px",
      width: "100%",
      backgroundColor: "#C0C0C0",
    },
  },
}));

function Cart(props) {
  const classes = useStyles();
  const cart = useSelector(cartSelector);
  const cartTotal = useSelector(cartTotalSelector);

  const navigate = useNavigate();
  
  const handleAddToCartSubmit = () => {
    navigate('/cart/checkout');
  }

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.breadcrumb}>
          <Breadcrumbs maxItems={2} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="#">
              Trang chủ
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Giỏ hàng
            </Link>
          </Breadcrumbs>
        </Box>
        {cart.length === 0 ? (
          <Box
            sx={{
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img  alt="empty cart" 
            src={require("../../../utils/images/emptycart.png")} />
          </Box>
        ) : (
          <Grid container spacing={2}>
            <Grid item className={classes.left}>
              <Paper elevation={0} sx={{ padding: 1 }}>
                <Typography
                  className={classes.cartTitle}
                  sx={{ fontWeight: 500, fontSize: "23px" }}
                >
                  GIỎ HÀNG CỦA BẠN
                </Typography>
                {cart.map((cartItem) => (
                  <CartItem
                    product={cartItem.product}
                    quan={cartItem.quantity}
                  />
                ))}
              </Paper>
            </Grid>
            <Grid item className={classes.right}>
              <Paper elevation={0}>
                <Box sx={{ m: 0, p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      height: "50px",
                    }}
                  >
                    <Typography>Tạm tính</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {formatPrice(cartTotal)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      height: "50px",
                    }}
                  >
                    <Typography>Thành tiền</Typography>
                    <Typography
                      sx={{ fontWeight: 500 }}
                      variant="h5"
                      color="#FF0000"
                    >
                      {formatPrice(cartTotal)}
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: "100%", marginTop: "20px" }}
                size="large"
                onClick={handleAddToCartSubmit}
              >
                ĐẶT HÀNG
              </Button>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Cart;
