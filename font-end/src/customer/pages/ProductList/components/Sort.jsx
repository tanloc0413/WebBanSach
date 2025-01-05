import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";

Sort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
function Sort({ currentSort, onChange }) {
  const handleSort = (e, newValueSort) => {
    if (onChange) onChange(newValueSort);
  };
  return (
    <Tabs
      value={currentSort}
      onChange={handleSort}
      textColor="primary"
      indicatorColor="primary"
      aria-label="disabled tabs example"
    >
      <Tab label="Giá thấp đến cao" value="ASC"></Tab>
      <Tab label="Giá cao xuống thấp" value="DESC"></Tab>
    </Tabs>
  );
}

export default Sort;
