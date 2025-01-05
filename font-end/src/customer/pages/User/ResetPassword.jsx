import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import userApi from "../../../api/userApi";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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

export default function ResetPassword() {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!email || !emailRegex.test(email)) {
      setErrors({ email: "Vui lòng nhập địa chỉ email hợp lệ" });
      return;
    } else {
      setErrors({});
    }

    try {
      const res = await userApi.resetPassword(email);
      console.log(res);
      if (res.status === "success") {
        setSuccess(true);
      } else {
        alert("resetPassword thất bại: " + res.message);
      }
    } catch (error) {
      console.log("Lỗi resetPassword: ", error);
      alert("Đã xảy ra lỗi trong quá trình resetPassword");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "500px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {success ? <CheckCircleIcon /> : <LockOutlinedIcon />}
          </Avatar>
          {success ? (
            <Typography component="h3" variant="h5">
              Vui lòng kiểm tra email của bạn{" "}
              <Link href={"/"}>
                Quay về trang chủ
              </Link>
            </Typography>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Nhập địa chỉ Email của bạn"
                name="email"
                autoComplete="email"
                autoFocus
                error={!!errors.email}
                helperText={errors.email}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                TIẾP TỤC
              </Button>
            </Box>
          )}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
