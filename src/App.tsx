import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderTemplate from './components/HeaderTemplate';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Result from './pages/Result';
import './scss/app.scss';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeaderTemplate />}>
          <Route path="" element={<Home />} />
          {/* <Route path="laptop/:id" element={<FullLaptop />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
