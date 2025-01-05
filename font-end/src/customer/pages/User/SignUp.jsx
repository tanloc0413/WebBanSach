import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import userApi from "../../../api/userApi";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import HeaderAcc from "./Components/HeaderAcc";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [checked, setChecked] = useState(false);
  // const [data, setData] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  // });
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const password = formData.get("password");
    const rePassword = formData.get("rePassword");

    // Kiểm tra họ và tên
    if (!fullName) {
      alert("Họ và tên là bắt buộc");
      return;
    }

    // Kiểm tra email
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!email || !emailRegex.test(email)) {
      alert("Vui lòng nhập địa chỉ email hợp lệ");
      return;
    }

    // Kiểm tra mật khẩu
    if (!password || password.length < 8) {
      alert("Mật khẩu phải có ít nhất 8 ký tự");
      return;
    }

    // Kiểm tra mật khẩu nhập lại
    if (password !== rePassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    // Kiểm tra hộp kiểm
    if (!checked) {
      alert("Bạn phải đồng ý nhận cập nhật qua email.");
      return;
    }

    const signUpData = {
      fullName,
      email,
      mobile,
      password,
    };

    try {
      const res = await userApi.signUp(signUpData);
      if (res.message === "Signup Success") {
        navigate("/sign-in");
      } else {
        alert("Đăng ký thất bại: " + res.message);
      }
    } catch (error) {
      console.log("Lỗi đăng ký: ", error);
      alert("Đã xảy ra lỗi trong quá trình đăng ký");
    }
  };

  return (
    <div id="block-signup">
      <div id="header-signup">
        <HeaderAcc/>
      </div>
      <div id="container-signup">
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs" className="form_blk-signup">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                ĐĂNG KÝ TÀI KHOẢN
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="fullName"
                      required
                      fullWidth
                      id="fullName"
                      label="Họ và tên"
                      autoFocus
                      // onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Địa chỉ Email"
                      name="email"
                      autoComplete="email"
                      // onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="mobile"
                      label="Số điện thoại"
                      name="mobile"
                      autoComplete="mobile"
                      // onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Nhập mật khẩu"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      // onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="rePassword"
                      label="Nhập lại mật khẩu"
                      type="password"
                      id="rePassword"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="allowExtraEmails"
                          color="primary"
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Bằng cách nhấn vào Đăng Ký, bạn đồng ý với các điều khoản và dịch vụ của chúng tôi."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Đăng ký
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <p className="text-questions">
                      Đã có tài khoản? 
                      <span>
                        <Link href="/sign-in" variant="body2">
                          {" Đăng nhập!"}
                        </Link>
                      </span>
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
