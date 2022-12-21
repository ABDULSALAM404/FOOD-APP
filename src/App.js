import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom'
import CardDetails from './components/CardDetails';
import { Cardss } from './components/Cardss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path= '/' element={<Cardss />}/>
        <Route path= '/cart/:id' element={<CardDetails />}/>
      </Routes>
    </>
  )
}

export default App;
