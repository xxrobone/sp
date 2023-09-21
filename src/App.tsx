import './App.scss';
import HoverEffect from './components/hovereffect/HoverEffect';
import image1 from './assets/images/nike4.png';
import image2 from './assets/images/nike3.png';
import swoosh from './assets/images/nikeswoosh.png';
import Sidebar from './components/sidebar/Sidebar';
import Magnetic from './components/magnetic/magnetic';

import {motion} from 'framer-motion'

function App() {
  return (
    <div className='main'>
      <Sidebar />
      <h1>SneakerSpot</h1>
      <div>
        <h2>Collab with</h2>
        <Magnetic>
          <motion.img src={swoosh} alt='swoosh' className='img'
            whileHover={{ filter: 'drop-shadow(2px 2px 10px red)' }}
            transition={{duration: 0.3, ease: 'easeOut'}}
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
    </div>
  );
}

export default App;
