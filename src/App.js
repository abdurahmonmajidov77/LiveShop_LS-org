import './App.css';
import FooterComponent from './components/FooterComponent/`';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <div className='Main'></div>
      <i className='fa-brands fa-apple'></i>
      <i className='fa-brands fa-samsung'></i>
      <i className='fa-brands fa-toshiba'></i>
      <i className='fa-brands fa-xiomi'></i>
      <i className='fa-brands fa-asus'></i>
      <i className='fa-brands fa-apple'></i>
      <i className='fa-brands fa-acer'></i>
      <FooterComponent/>
    </div>
  );
}

export default App;
