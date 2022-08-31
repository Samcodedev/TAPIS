import logo from './logo.svg';
import './App.css';
import NavBar from './Component/Nav-bar/NavBar';
import Header from './Component/Header/Header';
import Features from './Component/Features/Features';
import Feature2 from './Component/Features2/Features2';
import Clients from './Component/Clients/Clients';
import Discount from './Component/Discount/Discount';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Features />
      <Feature2 />
      <Clients />
      <Discount />
      <Footer />
    </div>
  );
}

export default App;
