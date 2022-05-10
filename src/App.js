import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import NoteState from './context/NoteState';
import Alert from './component/Alert';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>

          <Navbar />
          <Alert message="~Welcome to my app"/>
          <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;