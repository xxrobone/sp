import './App.scss';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import HoverEffect from './components/hovereffect/HoverEffect';
import image1 from './assets/images/nike4.png';
import image2 from './assets/images/nike3.png';
import swoosh from './assets/images/nikeswoosh.png';
import Sidebar from './components/sidebar/Sidebar';
import Magnetic from './components/magnetic/magnetic';
import Home from './pages/home/Home';

import { motion, AnimatePresence } from 'framer-motion';
import Info from './components/info/Info';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Home />} />
      <Route path='/latest' element={''} />
      <Route path='/latest' element={''} />
    </Route>
  )
);

function App() {
  return (
    <div className='main'>
      <Info />
      <Sidebar />
      <h1>SneakerSpot</h1>
      <div>
        <h2>Collab with</h2>
        <Magnetic>
          <motion.img
            src={swoosh}
            alt='swoosh'
            className='img'
            whileHover={{ filter: 'drop-shadow(2px 2px 10px red)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          ></motion.img>
        </Magnetic>
      </div>
      <HoverEffect
        title="Air Force 1's"
        subtitle='2024'
        desc='Only @sneakerspot'
        img1={image1}
        img2={image2}
      />
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </div>
  );
}

export default App;
