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
      
  const [value, setValue] = useState(0); // integer state    
  function refreshPage(){
    setValue({})
  }
  return (
    
    <Layout>
      
      <Routes>
        
        <Route path="/home"  element={<HomePage/>} />
        <Route path="/projects"  element={<ProjectsPage />} />
        <Route path="/favorites"  element={<FavoritesPage />} />
        <Route path="/artwork"  element={<ArtworkPage />} />
        <Route path="/*"  element={<HomePage />} />
      </Routes>
      
    </Layout>
  );
}

export default App;
