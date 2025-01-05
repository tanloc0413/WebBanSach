import { Box } from  '@mui/material';
import { BASEURLHOST, THUMBNAIL_PLACEHOLDER } from "../../../../constants";
import PropTypes from 'prop-types';
import React from 'react';

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.imageUrl
  ? product.imageUrl
  : THUMBNAIL_PLACEHOLDER;
  return (
    <Box className='product-thumbnailBox'>
      <img
        src={thumbnailUrl}
        alt={product.productName}
        width="100%"
        className='product-thumbnailIMG'
      />
    </Box>
  );
}

export default ProductThumbnail;
