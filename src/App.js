import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import HomePage from "./pages/Home";
import FavoritesPage from "./pages/Favorites";
import ProjectsPage from "./pages/MyProjects";
import Layout from './components/layout/Layout'
import ArtworkPage from './pages/Artwork';
import { useNavigate  } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from "react";




function App(props) {

  const navigate = useNavigate;
      function handleClickBack(url) {
        
        navigate(url, {replace: true})
        
        
        // Ready to navigate to another page.
      }
      
  
  return (
    
    <Layout>
      
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/kory_stennett_static_site"  element={<HomePage/>} />
        <Route path="/projects"  element={<ProjectsPage />} />
        <Route path="/favorites"  element={<FavoritesPage />} />
        <Route path="/artwork"  element={<ArtworkPage />} />
      </Routes>
      
    </Layout>
  );
}

export default App;
