import { Box, TextField, Autocomplete, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./searchInput.css";

AutocompleteSearchBar.propTypes = {
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};
function AutocompleteSearchBar({ list, onInChange, onEnChange }) {
  const [input, setInput] = useState();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginLeft: 1,
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={list.map((item) => item)}
        onInputChange={(event, newValue) => {
          console.log("Input changed", newValue);
          setInput(newValue);
          onInChange(newValue);
        }}
        onChange={(event, newValue) => {
          console.log("Item selected", newValue);
          if (newValue != null) {
            onEnChange(newValue);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            // label="Tìm kiếm..."
            placeholder="Tìm kiếm"
            InputLabelProps={{
              style: { top: "-6px" }, 
            }}
            InputProps={{
              ...params.InputProps, 
              style: { padding: 0 }, 
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                  style={{ cursor: "pointer" }}
                    onClick={() => {
                      console.log("SearchIcon clicked");
                      if (input != null) {
                        onEnChange(input);
                      }
                    }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              width: 350,
              backgroundColor: "white",
              borderRadius: "4px",
            }}
          />
        )}
      />
    </Box>
  );
}

export default AutocompleteSearchBar;
