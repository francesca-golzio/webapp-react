import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import components */
import DefaultLayout from "./layouts/DefaultLayout";
import MoviesHome from "./pages/MoviesHome";
import MovieDetails from "./pages/MovieDetails";

function App() {
  /* the logic would go here */
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/movies' Component={DefaultLayout}> // sets up the layout for the movies pages
          <Route index Component={MoviesHome}></ Route> //sets up the main route for the movies
          <Route path='/movies/:id' Component={MovieDetails}></ Route> // child route (inherits parent layout)          
        </ Route>
      </ Routes>
    </BrowserRouter>
  )
}

export default App
