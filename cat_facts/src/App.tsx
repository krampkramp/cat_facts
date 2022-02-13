import React from 'react';
import cat from './assets/img/cat.png';
import './App.css';
import CatsFacts from './components/CatsFacts';
import { Routes, Route, Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

import About from './components/About';

function App() {

  return (

    <div className="App">
      
      <h1>Welcome to Cat Facts!</h1>
      <img
        src={cat}
        alt='catimage'
      />  
      <Grid container>
        <Grid item xs={6}>
        <Link to="/" >
          Facts
          </Link>
        </Grid>
        <Grid item xs={6}>
        <Link to="/about" >About</Link>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Routes>
            <Route path="/" element={<CatsFacts />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Grid>
      </Grid>

    </div>

  );
}

export default App;
