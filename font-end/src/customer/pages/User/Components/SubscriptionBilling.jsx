import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Paper, Typography } from '@mui/material';

SubscriptionBilling.propTypes = {
    
};

function SubscriptionBilling(props) {
    return (
        <Box>
          <Typography variant="h4" gutterBottom>Subscription & billing</Typography>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>Subscription details</Typography>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="subtitle1">Your Membership</Typography>
                <Typography variant="h5" color="primary">Pro</Typography>
                <Typography variant="body1">Monthly billing: $9.99</Typography>
                <Typography variant="body1">Next Billing: March 2020</Typography>
              </Box>
              <Box>
                <Button variant="outlined">Change plan</Button>
              </Box>
            </Box>
            <Button variant="text" color="secondary">Cancel Subscription</Button>
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Payment method</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="body1">MasterCard **** 7369</Typography>
                <Typography variant="body2">This is your selected payment method</Typography>
              </Box>
              <Button variant="outlined">Change payment method</Button>
            </Box>
          </Paper>
        </Box>
      );
}

export default SubscriptionBilling;