
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import HomePage from "./pages/Home";
import FavoritesPage from "./pages/Favorites";
import ProjectsPage from "./pages/MyProjects";
import Layout from './components/layout/Layout'
import ArtworkPage from './pages/Artwork';


function App() {

  


  return (
    
    <Layout>
      
      <Routes>
        <Route path="/kory_stennett_static_site" element={<HomePage />} />
        <Route path="/new-meetup" element={<ProjectsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/artwork" element={<ArtworkPage />} />
      </Routes>
      
    </Layout>
  );
}

export default App;
