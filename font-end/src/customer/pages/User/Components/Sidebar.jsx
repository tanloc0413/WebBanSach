import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArchiveIcon from "@mui/icons-material/Archive";
import TocIcon from '@mui/icons-material/Toc';
Sidebar.propTypes = {
  onMenuClick: PropTypes.func,
};

function Sidebar({filters,  onMenuClick }) {
  const menuItems = [
    { text: "Hồ sơ", icon: <AccountCircleIcon /> },
    { text: "Lịch sử đặt hàng", icon: <TocIcon /> },
    { text: "Đơn đặt hàng và hóa đơn", icon: <CreditCardIcon /> },
  ];
  const handleClickMenu = (menu) => {
    // console.log('Sidebar',menu);

    if (onMenuClick) {
      // console.log(menu);

      onMenuClick(menu);
    }
  };

  return (
    <List>
      {menuItems.map((item, index) => (
        <ListItem button key={index} onClick={() => handleClickMenu(item.text)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
}

export default Sidebar;
