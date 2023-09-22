import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Item from './pages/item/Item';
import Sidebar from './components/sidebar/Sidebar';
/* import HoverEffect from './components/hovereffect/HoverEffect';
import image1 from './assets/images/nike4.png';
import image2 from './assets/images/nike3.png';
import swoosh from './assets/images/nikeswoosh.png';

import Magnetic from './components/magnetic/magnetic';


import { motion, AnimatePresence } from 'framer-motion';
import Info from './components/info/Info'; */

/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Sidebar />}>
      <Route index element={<Home />} />
      <Route path='/:id' element={<Item />} />
      <Route path='/latest' element={''} />
      <Route path='/' />
    </Route>
  )
); */

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Item />} />
      </Routes>
    </Router>
  );
}

export default App;
