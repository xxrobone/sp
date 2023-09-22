import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { shoesData } from '../../constants/shoesData';
import './Home.modules.scss';
import Info from '../../components/info/Info';
import HoverEffect from '../../components/hovereffect/HoverEffect';
import image1 from '../../assets/images/nike4.png';
import image2 from '../../assets/images/nike3.png';
import swoosh from '../../assets/images/nikeswoosh.png';

export type Shoe = {
  id: string;
  name: string;
  details: string;
  steps: string;
  sole: string;
  fabricColor: string;
  laces: string;
  image: string;
  to: string;
};

const easing = [0.5, -0.06, 0.03, 0.97];

const fadeInUp = {
  initial: {
    y: 70,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  exit: {
    y: -600,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Home = () => (
  <motion.div
    className='main'
    initial='initial'
    animate='animate'
    transition={{ duration: 1 }}
    exit={{ x: -500, opacity: 0 }}
  >
    <Info />

    <h1>SneakerSpot</h1>
    <div>
      <h2>Collab with</h2>
      <motion.img
        src={swoosh}
        alt='swoosh'
        className='img'
        whileHover={{ filter: 'drop-shadow(2px 2px 10px red)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      ></motion.img>
    </div>
    <HoverEffect
      title="Air Force 1's"
      subtitle='2024'
      desc='Only @sneakerspot'
      img1={image1}
      img2={image2}
    />
    <div className='container'>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className='title'
      >
        <h1>Latest releases: </h1>
      </motion.div>
      <motion.div variants={stagger} className='row'>
        {shoesData.map(({ name, image, steps, id }) => (
          <Link key={id} to={`/${id}`}>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='card'
            >
              <span className='row_headline'>{name}</span>
              <motion.img
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                key={image}
                src={image}
                width={250}
              />
              <div className='info'>
                <h4>{name}</h4>
                <span>{steps}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

export default Home;
