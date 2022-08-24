import React from 'react';
// import { Counter } from './features/counter/Counter';
import HomePage from './pages/HomePage';
import "./styles/App.css"
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import CreateAccount from './components/CreateAccount';
import Prefrence1 from './components/Prefrence1';



function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signin' element={<SignIn/>}  />  
      <Route path='/signup' element={<SignUp/>}  />     
      <Route path='/createaccount' element={<CreateAccount/>} />
      <Route path='/prefrence1' element={<Prefrence1/>}      />

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
