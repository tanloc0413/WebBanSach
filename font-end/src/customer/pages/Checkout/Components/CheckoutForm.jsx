import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import useProvinces from "../../../../hooks/useProvinces";
import PropTypes from "prop-types";
import { userInfor } from "../../../../app/Selectors";
import { useSelector } from "react-redux";

CheckoutForm.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function CheckoutForm({ handleSubmitPayment }) {
  const user = useSelector(userInfor);
  const [formData, setFormData] = useState({
    userId: user.id,
    customerName: user.fullName,
    customerEmail: user.email,
    customerMobile: user.mobile,
    address: "",
    city: "Thành phố Hà Nội",
    district: "Quận Ba Đình",
    paymentMethod: "COD",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const provinces = useProvinces();
  const [districts, setDistricts] = useState([
    { FullName: "Quận Ba Đình", Code: "001" },
    { FullName: "Quận Hoàn Kiếm", Code: "002" },
    { FullName: "Quận Tây Hồ", Code: "003" },
    { FullName: "Quận Long Biên", Code: "004" },
    { FullName: "Quận Cầu Giấy", Code: "005" },
    { FullName: "Quận Đống Đa", Code: "006" },
    { FullName: "Quận Hai Bà Trưng", Code: "007" },
    { FullName: "Quận Hoàng Mai", Code: "008" },
    { FullName: "Quận Thanh Xuân", Code: "009" },
    { FullName: "Huyện Sóc Sơn", Code: "016" },
    { FullName: "Huyện Đông Anh", Code: "017" },
    { FullName: "Huyện Gia Lâm", Code: "018" },
    { FullName: "Quận Nam Từ Liêm", Code: "019" },
    { FullName: "Huyện Thanh Trì", Code: "020" },
    { FullName: "Quận Bắc Từ Liêm", Code: "021" },
    { FullName: "Huyện Mê Linh", Code: "250" },
    { FullName: "Quận Hà Đông", Code: "268" },
    { FullName: "Thị xã Sơn Tây", Code: "269" },
    { FullName: "Huyện Ba Vì", Code: "271" },
    { FullName: "Huyện Phúc Thọ", Code: "272" },
    { FullName: "Huyện Đan Phượng", Code: "273" },
    { FullName: "Huyện Hoài Đức", Code: "274" },
    { FullName: "Huyện Quốc Oai", Code: "275" },
    { FullName: "Huyện Thạch Thất", Code: "276" },
    { FullName: "Huyện Chương Mỹ", Code: "277" },
    { FullName: "Huyện Thanh Oai", Code: "278" },
    { FullName: "Huyện Thường Tín", Code: "279" },
    { FullName: "Huyện Phú Xuyên", Code: "280" },
    { FullName: "Huyện Ứng Hòa", Code: "281" },
    { FullName: "Huyện Mỹ Đức", Code: "282" },
  ]);

  const fetchDistricts = (provinceName) => {
    fetch("/utils/json/provinces.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const province = data.find((item) => item.FullName === provinceName);
        if (province) {
          const filteredDistricts = province.District.map((district) => ({
            FullName: district.FullName,
            Code: district.Code,
          }));
          setDistricts(filteredDistricts);

          if (filteredDistricts.length > 0) {
            setFormData((prevData) => ({
              ...prevData,
              district: filteredDistricts[0].FullName,
            }));
          }
        } else {
          setDistricts([]);
          setFormData((prevData) => ({
            ...prevData,
            district: "",
          }));
        }
      })
      .catch((error) => console.error("Error fetching the provinces:", error));
  };

  useEffect(() => {
    fetchDistricts(formData.city);
  }, [formData.city]);

  const handleProvinceChange = (event) => {
    const newCity = event.target.value;
    setFormData({
      ...formData,
      city: newCity,
      district: "", 
    });
    fetchDistricts(newCity);
  };

  const handleDistrictChange = (event) => {
    setFormData({
      ...formData,
      district: event.target.value,
    });
  };

  const handleMobileChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      customerMobile: value,
    });
    if (!/^\d{10}$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Số điện thoại phải có đúng 10 chữ số.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "",
      }));
    }
  };

  const handleAddressChange = (event) => {
    setFormData({
      ...formData,
      address: event.target.value,
    });
  };

  const handleChangePaymentMethod = (e) => {
    setFormData({
      ...formData,
      paymentMethod: e.target.value,
    });
  };

  const handleFullNameChange = (e) => {
    setFormData({
      ...formData,
      customerName: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      customerEmail: value,
    });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email không hợp lệ.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.email && !errors.phone && handleSubmitPayment) {
      handleSubmitPayment(formData);
    }
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="fullName"
            name="fullName"
            label="Họ Và Tên"
            fullWidth
            variant="outlined"
            value={formData.customerName}
            onChange={handleFullNameChange}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            type='email'
            fullWidth
            variant="outlined"
            value={formData.customerEmail}
            onChange={handleEmailChange}
            // error={!!errors.email}
            // helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Số điện thoại"
            fullWidth
            variant="outlined"
            value={formData.customerMobile}
            onChange={handleMobileChange}
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Địa chỉ"
            fullWidth
            variant="outlined"
            value={formData.address}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <FormControl fullWidth>
            <InputLabel id="province-select-label">Tỉnh / Thành</InputLabel>
            <Select
              labelId="province-select-label"
              id="province-select"
              value={formData.city}
              label="Tỉnh / Thành"
              onChange={handleProvinceChange}
            >
              {provinces.map((p) => (
                <MenuItem key={p.Code} value={p.FullName}>
                  {p.FullName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={5}>
          <FormControl fullWidth>
            <InputLabel id="district-select-label">Quận / Huyện</InputLabel>
            <Select
              labelId="district-select-label"
              id="district-select"
              value={formData.district}
              label="Quận / Huyện"
              onChange={handleDistrictChange}
            >
              {districts.map((d) => (
                <MenuItem key={d.Code} value={d.FullName}>
                  {d.FullName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="payment-method-label">
              Phương thức thanh toán
            </FormLabel>
            <RadioGroup
              aria-labelledby="payment-method-label"
              defaultValue="COD"
              name="radio-buttons-group"
              onChange={handleChangePaymentMethod}
            >
              <FormControlLabel
                value="COD"
                control={<Radio />}
                label="Thanh toán khi giao hàng (COD)"
              />
              <FormControlLabel
                value="VNPAY"
                control={<Radio />}
                label="Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!!errors.email || !!errors.phone} // disable the button if there are errors
          >
            Hoàn tất đơn hàng
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default CheckoutForm;
