import { Routes, Route } from 'react-router-dom';
import './App.css';
import SiteHeader from './Components/SiteHeader/SiteHeader';
import ContainerNews from './Pages/NewsPage/NewsPage';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import ProgramsPage from './Pages/ProgramsPage/ProgramsPage';


function App() {
  return (
    <>
      <SiteHeader></SiteHeader>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/NewsPage" element={<ContainerNews/>}/>
    <Route path="/ProgramsPage" element={<ProgramsPage/>}/>
    </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
