import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import QuantityField from "../../../Components/form-controls/QuantityField/QuantityField";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required("Please enter quantity")
      .min(1, "Minimum value is 1")
      .typeError("Please enter a number"),
  });
  const form = useForm({
    defaultValues: {
    quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label="Quantity" form={form} />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "250px" }}
        size="large"
      >
        Add to cart
      </Button>
    </form>
  );
}

export default AddToCartForm;