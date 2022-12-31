
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import HomePage from "./pages/Home";
import FavoritesPage from "./pages/Favorites";
import ProjectsPage from "./pages/MyProjects";
import Layout from './components/layout/Layout'
import ArtworkPage from './pages/Artwork';
import { Unity, useUnityContext } from "react-unity-webgl";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";



function App(props) {

  
  const navigate = useNavigate();

  const refreshPage = () => {
      navigate(0);
  }  
  const { unload } = useUnityContext({
    loaderUrl: "kory_stennett_static_site/UnityBuilds/WebGL.loader.js",
    dataUrl: "kory_stennett_static_site/UnityBuilds/WebGL.data",
    frameworkUrl: "kory_stennett_static_site/UnityBuilds/WebGL.framework.js",
    codeUrl: "kory_stennett_static_site/UnityBuilds/WebGL.wasm",
    webglContextAttributes: {
        preserveDrawingBuffer: true,
      },
  });

    const [devicePixelRatio, setDevicePixelRatio] = useState(
  window.devicePixelRatio
  );
  const unloadGame = () => {
    console.log("Unloading Game")
    unload();
  }

  return (
    
    <Layout>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kory_stennett_static_site" onEnter={unload} element={<HomePage />} />
        <Route path="/new-meetup" onLeave={console.log("Leaving game page")} element={<ProjectsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/artwork" element={<ArtworkPage />} />
      </Routes>
      
    </Layout>
  );
}

export default App;
