import React, { useState } from "react";
import { Container, Grid, CssBaseline, Box } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import SubscriptionBilling from "./Components/SubscriptionBilling";
import OrderHistory from "./Components/OrderHistory";
import AccountProfile from "./Components/AccountProfile";

function UserSettings() {
  const [selectedMenu, setSelectedMenu] = useState("Profile");

  const handleMenuClick = (menu) => {
    // console.log("UserSettings ", menu);
    setSelectedMenu(menu);
  };
  const renderContent = () => {
    switch (selectedMenu) {
      case "Đơn đặt hàng và hóa đơn":
        return <SubscriptionBilling />;
      // Add more cases for different menu items
      case "Lịch sử đặt hàng":
        return <OrderHistory />;
      case "Hồ sơ":
        return <AccountProfile />;
      default:
        return <AccountProfile />;
    }
  };

  return (
    <div>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#f4f4f4", p: "30px 0px", }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={4} sm={3}>
              <Sidebar onMenuClick={handleMenuClick} />
            </Grid>
            <Grid item xs={8} sm={9}>
              {renderContent()}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default UserSettings;
