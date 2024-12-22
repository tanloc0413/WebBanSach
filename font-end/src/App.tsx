import './App.css';
import RoutePage from './route/RoutePage';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { getAllTheBooks } from './api/BookAPI';

function App() {

  // getAllTheBooks().then().catch();

  return (
    <div className="App">
      <Header/>
      <div id='app-container'>
        <RoutePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
