import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/clientes/Home/Home"
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';


const App = () => {



  return (
    <>

      <Router>

        <Navigation />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <Footer />

      </Router>
    </>

  );
}

export default App;
