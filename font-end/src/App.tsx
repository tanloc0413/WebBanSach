import './App.css';
import RoutePage from './route/RoutePage';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { CartProvider } from './layout/Cart/CartContext';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');
  

  return (
    <CartProvider>
      <div className="App">
        <Header
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
        <div id='app-container'>
          <RoutePage
            searchKeyword={searchKeyword}
          />
        </div>
        <Footer/>
      </div>
    </CartProvider>
  );
}

export default App;