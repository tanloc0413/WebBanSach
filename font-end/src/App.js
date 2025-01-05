import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';
import Checkout from './customer/pages/Checkout/Checkout';
import PaymentResult from './customer/pages/Checkout/PaymentResult';
import SignIn from './customer/pages/User/SignIn';
import SignUp from './customer/pages/User/SignUp';
import ResetPassword from './customer/pages/User/ResetPassword';
import ResetPasswordResult from './customer/pages/User/ResetPasswordResult';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<CustomerRouters />} ></Route>
        <Route path="/cart/checkout" element={<Checkout />}>
        </Route>
        <Route path="/payment-result/*" element={<PaymentResult />}>
          {" "}
        </Route>
        <Route path="/sign-in" element={<SignIn />}>
          {" "}
        </Route>
        <Route path="/sign-up" element={<SignUp />}>
          {" "}
        </Route>
        <Route path="/reset-password" element={<ResetPassword />}>
          {" "}
        </Route>
        <Route path="/reset-password/result/*" element={<ResetPasswordResult />}>
          {" "}
        </Route>
    </Routes>
  );
}

export default App;
