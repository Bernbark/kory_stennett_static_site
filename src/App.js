import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import HomePage from "./pages/Home";
import FavoritesPage from "./pages/Favorites";
import ProjectsPage from "./pages/MyProjects";
import Layout from './components/layout/Layout'
import ArtworkPage from './pages/Artwork';
import { useNavigate  } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from "react";
import css from './components/layout/MainNavigation.module.css';



function App(props) {
  
  
  const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light'
    );    
  function toggleTheme() {
    console.log("theme toggled");
    console.log("theme before switching: "+theme);
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
      
      
    };
   
  useEffect(() => {
    // here we should change the classNames or in some way alter the CSS of the website
      localStorage.setItem('theme', theme);
      document.body.className = theme;
      
    }, [theme]);
  return (
    
    <Layout className={css.bottom} classNameToGive={theme} toggleTheme={toggleTheme}>
      
            <button className={css.themeButton} onClick={event => {
                                    toggleTheme();
                                    
                                }}>Toggle Theme</button>
            
      <Routes>
        
        <Route path="/home"  element={<HomePage classNameToGive={theme}/>} />
        <Route path="/projects"  element={<ProjectsPage classNameToGive={theme}/>} />
        <Route path="/favorites"  element={<FavoritesPage classNameToGive={theme}/>} />
        <Route path="/artwork"  element={<ArtworkPage classNameToGive={theme}/>} />
        <Route path="/*"  element={<HomePage classNameToGive={theme}/>} />
      </Routes>
      
    </Layout>
  );
}

export default App;
