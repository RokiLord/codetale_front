
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import './pages/Main.jsx'
import Main from './pages/Main.jsx';
import Curriculum from './pages/Curriculum'
import Content from './pages/Content';
import CodeEditor from './pages/CodeEditor';
import Register from './pages/Register';
import { CookiesProvider } from 'react-cookie';


function App() {
  return (
    <div className="App">
      <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<Login  />} />
          <Route path='register' element={<Register />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="content" element={<Content />} />
          <Route path="codeeditor" element={<CodeEditor />} />
        </Routes>
      </BrowserRouter>
      </CookiesProvider>
    </div>
  );
}

export default App;
