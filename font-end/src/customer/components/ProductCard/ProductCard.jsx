import React from "react";
import PropTypes from "prop-types";
import { BASEURLHOST, THUMBNAIL_PLACEHOLDER } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../utils";
import { Card } from "react-bootstrap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { favouritesSelector } from "../../../app/Selectors";
import { setFavourite, removeFavourite } from "../../../app/FavouriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { useState } from "react";
ProductCard.propTypes = {
  product: PropTypes.object,
};

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const thumbnailUrl = product.imageUrl
    ? product.imageUrl
    : THUMBNAIL_PLACEHOLDER;

  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  const favourites = useSelector(favouritesSelector);
  console.log("favourites: ", favourites);
  const [isFavourite, setIsFavourite] = useState(
    favourites.some((fav) => fav.id === product.id)
  );
  console.log("isFavourite: ", isFavourite);
  const handleClickFavourite = (e) => {
    e.stopPropagation();
    // Logic để xử lý thêm/bỏ sản phẩm khỏi danh sách favourite
    const action = setFavourite({
      newItem: product,
    });
    dispatch(action);
    if (isFavourite) {
      setIsFavourite(false);
    } else {
      setIsFavourite(true);}
  };

  return (
    <Card
      style={{
        width: "13.5rem",
        height: "25.5rem",
        marginBottom: "10px",
        cursor: "pointer",
      }}
      onClick={() => handleProductClick(product.id)}
    >
      <div className="card-image">
        <Card.Link className="card-product">
          <Card.Img variant="top" src={thumbnailUrl} />
        </Card.Link>
      </div>
      <Card.Body>
        <Card.Text className="card-trademark">{product.brand}</Card.Text>
        <Card.Title>{product.productName}</Card.Title>
        <div className="card-price">
          <Card.Text className="card__text-price">
            {formatPrice(product.discountedPrice)}
          </Card.Text>
          <Card.Text className="card__text-cost">
            {formatPrice(product.price)}
          </Card.Text>
        </div>
        <IconButton onClick={handleClickFavourite}>
          <FavoriteBorderIcon
            style={{ color: isFavourite ? "red" : "inherit" }}
          />
        </IconButton>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
