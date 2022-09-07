// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Example from './components/Example.jsx';
function App() {
  return (
    <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>

           <Routes>
                 <Route exact path='/about' element={<Example />}></Route>
                 

                
          </Routes>
          </div>
       </Router>
  );
}

export default App;
