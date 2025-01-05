import React from "react";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import CheckoutForm from "./Components/CheckoutForm";
import { makeStyles } from "@mui/styles";
import "./Checkout.css";
import { useSelector } from "react-redux";
import {
  cartSelector,
  cartTotalSelector,
  userInfor,
} from "../../../app/Selectors";
import { formatPrice } from "../../../utils";
import paymentApi from "../../../api/paymentApi";
import HeaderAcc from "../User/Components/HeaderAcc";

Checkout.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: { padding: "30px 0px", backgroundColor: "#f4f4f4" },
  left: {
    width: "55%",
    padding: "12px",
    borderRight: "1px solid grey",
  },
  right: { flex: "1 1 0", padding: "12px", width: "45%" },
  breadcrumb: { marginBottom: "20px" },
}));

function Checkout(props) {
  const classes = useStyles();
  const cart = useSelector(cartSelector);
  const orderTotal = useSelector(cartTotalSelector);

  const handleSubmitPayment = async (formData) => {
    if (formData.paymentMethod === "VNPAY") {
      try {
        // Create a string of order items in the format [productId,quantity] separated by semicolons
        const orderItems = cart
          .map((product) => `${product.id},${product.quantity}`)
          .join(";");

        // Create orderInfo string
        const orderInfo = `${formData.userId};${formData.customerName};${formData.customerEmail};${formData.customerMobile};${formData.address},${formData.city}, ${formData.district}`;

        // Combine orderInfo and orderItems properly
        const combinedOrderInfo = `${orderInfo} orderItems:${orderItems}`;
        const res = await paymentApi.payment(
          orderTotal,
          combinedOrderInfo
        );
        console.log("url: ", res);
        window.location.href = res.paymentUrl;
      } catch (error) {
        console.log("Error with payment: ", error);
      }
    }
  };
  return (
    <Box className={classes.root}>
      <HeaderAcc/>
      <Container>
        <Grid container>
          <Grid item className={classes.left}>
            <Box>
              <Typography>SHOP PHU KIEN</Typography>
              <Box className={classes.breadcrumb}>
                <Breadcrumbs maxItems={3} aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    Trang chủ
                  </Link>
                  <Link underline="hover" color="inherit" href="#">
                    Checkout
                  </Link>
                </Breadcrumbs>
              </Box>
            </Box>
            <Box>
              <Typography>Thông tin giao hàng</Typography>
              <Typography marginBottom={2}>Bạn đã có tài khoản?</Typography>
              <CheckoutForm handleSubmitPayment={handleSubmitPayment} />
            </Box>
          </Grid>
          <Grid item className={classes.right}>
            <div className="order-summary order-summary-is-collapsed">
              <h2 className="visually-hidden">Thông tin đơn hàng</h2>
              <div className="order-summary-sections">
                <div
                  className="order-summary-section order-summary-section-product-list"
                  data-order-summary-section="line-items"
                >
                  <table className="product-table">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span className="visually-hidden">Hình ảnh</span>
                        </th>
                        <th scope="col">
                          <span className="visually-hidden">Mô tả</span>
                        </th>
                        <th scope="col">
                          <span className="visually-hidden">Số lượng</span>
                        </th>
                        <th scope="col">
                          <span className="visually-hidden">Giá</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((cartItem) => (
                        <tr
                          className="product"
                          data-product-id={1037850824}
                          data-variant-id={1082802643}
                        >
                          <td className="product-image">
                            <div className="product-thumbnail">
                              <div className="product-thumbnail-wrapper">
                                <img
                                  className="product-thumbnail-image"
                                  alt="Dây da Native Union Classic cho Apple Watch 38/40/41 mm"
                                  src={cartItem.product.imageUrl}
                                />
                              </div>
                              <span
                                className="product-thumbnail-quantity"
                                aria-hidden="true"
                              >
                                1
                              </span>
                            </div>
                          </td>
                          <td className="product-description">
                            <span className="product-description-name order-summary-emphasis">
                              {cartItem.product.productName}
                            </span>
                            <span className="product-description-variant order-summary-small-text">
                              38/40/41 mm / Black
                            </span>
                          </td>
                          <td className="product-quantity visually-hidden">
                            {cartItem.quantity}
                          </td>
                          <td className="product-price">
                            <span className="order-summary-emphasis">
                              {formatPrice(
                                cartItem.quantity * cartItem.product.price
                              )}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div
                  className="order-summary-section order-summary-section-discount"
                  data-order-summary-section="discount"
                >
                  <form
                    id="form_discount_add"
                    acceptCharset="UTF-8"
                    method="post"
                  >
                    <input name="utf8" type="hidden" defaultValue="✓" />
                    <div className="fieldset">
                      <div className="field  ">
                        <div className="field-input-btn-wrapper">
                          <div className="field-input-wrapper">
                            <label
                              className="field-label"
                              htmlFor="discount.code"
                            >
                              Mã giảm giá
                            </label>
                            <input
                              placeholder="Mã giảm giá"
                              className="field-input"
                              data-discount-field="true"
                              autoComplete="false"
                              autoCapitalize="off"
                              spellCheck="false"
                              size={30}
                              type="text"
                              id="discount.code"
                              name="discount.code"
                              defaultValue=""
                            />
                          </div>
                          <button
                            type="submit"
                            className="field-input-btn btn btn-default btn-disabled"
                          >
                            <span className="btn-content">Sử dụng</span>
                            <i className="btn-spinner icon icon-button-spinner" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="order-summary-section order-summary-section-display-discount"
                  data-order-summary-section="discount-display"
                >
                  <div>
                    <div className="hrv-discount-choose-coupons">
                      <div>
                        <svg
                          width={15}
                          height={10}
                          viewBox="0 0 18 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.3337 5.3335V2.00016C17.3337 1.07516 16.5837 0.333496 15.667 0.333496H2.33366C1.41699 0.333496 0.675326 1.07516 0.675326 2.00016V5.3335C1.59199 5.3335 2.33366 6.0835 2.33366 7.00016C2.33366 7.91683 1.59199 8.66683 0.666992 8.66683V12.0002C0.666992 12.9168 1.41699 13.6668 2.33366 13.6668H15.667C16.5837 13.6668 17.3337 12.9168 17.3337 12.0002V8.66683C16.417 8.66683 15.667 7.91683 15.667 7.00016C15.667 6.0835 16.417 5.3335 17.3337 5.3335ZM15.667 4.11683C14.6753 4.69183 14.0003 5.77516 14.0003 7.00016C14.0003 8.22516 14.6753 9.3085 15.667 9.8835V12.0002H2.33366V9.8835C3.32533 9.3085 4.00033 8.22516 4.00033 7.00016C4.00033 5.76683 3.33366 4.69183 2.34199 4.11683L2.33366 2.00016H15.667V4.11683ZM9.83366 9.50016H8.16699V11.1668H9.83366V9.50016ZM8.16699 6.16683H9.83366V7.8335H8.16699V6.16683ZM9.83366 2.8335H8.16699V4.50016H9.83366V2.8335Z"
                            fill="#318DBB"
                          />
                        </svg>
                        <span>Xem thêm mã giảm giá</span>
                      </div>
                      <div id="list_short_coupon">
                        <span>
                          <span data-code="SWITCHEASY GIẢM 50%">Giảm 50%</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="order-summary-section order-summary-section-total-lines payment-lines"
                  data-order-summary-section="payment-lines"
                >
                  <table className="total-line-table">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span className="visually-hidden">Mô tả</span>
                        </th>
                        <th scope="col">
                          <span className="visually-hidden">Giá</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="total-line total-line-subtotal">
                        <td className="total-line-name">Tạm tính</td>
                        <td className="total-line-price">
                          <span
                            className="order-summary-emphasis"
                            data-checkout-subtotal-price-target={121800000}
                          >
                            {formatPrice(orderTotal)}
                          </span>
                        </td>
                      </tr>
                      <tr className="total-line total-line-shipping">
                        <td className="total-line-name">Phí vận chuyển</td>
                        <td className="total-line-price">
                          <span
                            className="order-summary-emphasis"
                            data-checkout-total-shipping-target={0}
                          >
                            —
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot className="total-line-table-footer">
                      <tr className="total-line">
                        <td className="total-line-name payment-due-label">
                          <span className="payment-due-label-total">
                            Tổng cộng
                          </span>
                        </td>
                        <td className="total-line-name payment-due">
                          <span
                            className="payment-due-price"
                            data-checkout-payment-due-target={121800000}
                          >
                            {formatPrice(orderTotal)}
                          </span>
                          <span
                            className="checkout_version"
                            display="none"
                            data_checkout_version={27}
                          ></span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Checkout;
