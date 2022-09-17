import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';
import Navbar from './Components/Navbar';


function App() {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
  
    </Box>
  );
}

export default App;
