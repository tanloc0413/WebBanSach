import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box,Typography } from '@mui/material';
import categoryApi from "../../../../api/categoryApi";
import { makeStyles } from "@mui/styles";
import { CategoryContext } from '../../../../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
  },

  menu: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',

    '& > li': {
      // marginTop: theme.spacing(1),
      transition: 'all .25s',

      '&:hover': {
        color: 'blue',
        cursor: 'pointer',
      },
    },
  },
}));

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const classes = useStyles();

  const categories = useContext(CategoryContext);

  const handleCategoryClick = (categoryName) => {
    if (onChange) {
      onChange(categoryName);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" fontWeight={800}>DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        {categories.map((c) => (
          <li key={c.categoryId} onClick={() => handleCategoryClick(c.categoryName)}>
            <Typography variant="body2">{c.categoryName}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;