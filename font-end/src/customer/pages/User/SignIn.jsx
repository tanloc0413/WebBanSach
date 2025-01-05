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
import { IconButton } from "@mui/material";
// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import userApi from "../../../api/userApi";
import { logIn } from "../../../app/UserSlice";
import { useDispatch } from "react-redux";
import HeaderAcc from "./Components/HeaderAcc";
import GoogleColorIcon from "../../../utils/images/google.png";
import FbColorIcon from "../../../utils/images/facebook.png";
import "./signin.css";


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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  // const [data, setData] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  // });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({
      email: email,
      password: password,
    });
    const signInData = {
      email,
      password,
    };

    try {
      const res = await userApi.signIn(signInData);
      if (res.message === "Signin Success") {
        const userInfor = ({
           id: res.id,
           email: res.email,
           userName: res.userName,
           fullName: res.fullName,
           mobile: res.mobile,
           jwt: res.jwt
        });
        const action = logIn(userInfor);
        // console.log('action:',action)
        dispatch(action);

        navigate("/");
      } else {
        alert("Đăng nhập thất bại: " + res.message);
      }
    } catch (error) {
      console.log("Lỗi đăng nhập: ", error);
      alert("Đã xảy ra lỗi trong quá trình đăng nhập");
    }
  };

  return (
    <div id="block-signin">
      <div id="header-signin">
        <HeaderAcc/>
      </div>
      <div id="container-signin">
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs" className="form_blk-signin">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                ĐĂNG NHẬP
              </Typography>
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
                  label="Địa chỉ Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Nhập mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Nhớ tài khoản"
                />

                <Box sx={{ textAlign: "center" }}>
                  <IconButton>
                    <img src={GoogleColorIcon} alt="google icon" className="google-icon"/>
                    {/* <GoogleIcon/> */}
                  </IconButton>
                  <IconButton>
                    <img src={FbColorIcon} alt="google icon" className="fb-icon"/>
                    {/* <FacebookIcon /> */}
                  </IconButton>
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  ĐĂNG NHẬP
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/reset-password" variant="body2">
                      Quên mật khẩu?
                    </Link>
                  </Grid>
                  <Grid item>
                    <p className="text-question">
                      Chưa có tài khoản? 
                      <span>
                        <Link href="/sign-up" variant="body2">
                          {" Đăng ký ngay!"}
                        </Link>
                      </span>
                    </p>

                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
