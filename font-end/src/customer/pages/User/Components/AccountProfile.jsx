import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
  Container,
} from "@mui/material";

const AccountProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSaveChanges = () => {
    // Logic to save changes
    console.log("Changes saved:", { name, email, avatar });
  };

  return (
    <Container>
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Hồ sơ
        </Typography>
        <Typography variant="subtitle1" gutterBottom padding={1}>
          Cập nhật thông tin
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label="Họ và tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} container alignItems="center" spacing={2}>
            <Grid item>
              <Avatar
                src={avatar}
                alt="Avatar"
                sx={{ width: 56, height: 56 }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" component="label">
                Tải lên
                <input type="file" hidden onChange={handleAvatarChange} />
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveChanges}
            >
              Lưu thay đổi
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AccountProfile;
