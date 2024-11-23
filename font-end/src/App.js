import './App.css';
import RoutePage from './route/RoutePage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <RoutePage/>
      <Footer/>
    </div>
  );
}

export default App;
