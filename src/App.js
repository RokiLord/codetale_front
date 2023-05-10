
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import './pages/Main.jsx'
import Main from './pages/Main.jsx';
import Curriculum from './pages/Curriculum';
import Content from './pages/Content';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/Curriculum" element={ <Curriculum />} />
        <Route path="/Content" element={<Content />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
