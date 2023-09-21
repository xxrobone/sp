import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { shoesData } from '../../constants/shoesData';
import './Item.modules.scss';

type ShoeParams = {
  id: string;
};

interface Shoe {
  id: string;
  name: string;
  details: string;
  steps: string;
  sole: string;
  fabricColor: string;
  laces: string;
  image: string;
}

const easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: {
    x: -60,
    opacity: 0,
    transition: { delay: 0.4, duration: 0.3, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

async function getShoe(id: string) {
  const foundShoe = shoesData.find((shoe) => id === shoe.id);

  if (foundShoe) {
    return foundShoe;
  } else {
    throw new Error('Shoe not found'); // You can customize the error message as needed
  }
}

// Usage example:
const idToFind = '1'; // Replace with the ID you want to search for
getShoe(idToFind)
  .then((shoe) => {
    console.log('Found Shoe:', shoe);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

const Item = () => {
  const { id } = useParams<ShoeParams>();
  const safeId = id ?? 'defaultId';
  const [shoe, setShoe] = useState<Shoe | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shoeData = await getShoe(safeId); // Pass safeId to getShoe
        setShoe(shoeData);
      } catch (error) {
        console.error('Error fetching shoe data:', error);
      }
    };

    fetchData();
  }, [safeId]);

  if (!shoe) {
    // If shoe data is not available yet, you can return a loading indicator or handle it as needed
    return <div>Loading...</div>;
  }

  const { name, details, steps, image } = shoe;

  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <div className='fullscreen'>
        <Link to='/'>
          <motion.div
            initial={{ x: -1000, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a className='go_back'>Go Back</a>
          </motion.div>
        </Link>

        <div className='f_card'>
          <motion.div
            className='img'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <motion.img
              key={id}
              src={`../${image}`}
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -400, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>
          <div className='details'>
            <motion.div variants={stagger} className='inner'>
              <motion.div variants={fadeInUp}>
                <span className='title'>Sneaker model: {name}</span>
              </motion.div>
              <motion.h1 variants={fadeInUp}>{name}</motion.h1>
              <motion.p variants={fadeInUp}>{details}</motion.p>
              <motion.div variants={fadeInUp} className='additionals'>
                <span>Instructions: </span>
                <span>How to use</span>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <span className='steps'>{steps}</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Item;
