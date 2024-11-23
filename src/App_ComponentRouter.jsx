import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      {/* Routes are declared within this component */}
      <BrowserRouter>
      <Navbar />
        {/* Declare individual routes here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
