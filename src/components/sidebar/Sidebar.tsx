import { useEffect } from 'react';
import Magnetic from '../magnetic/magnetic';

// animation effects
import { motion } from 'framer-motion';

// styles and icons
import './sidebar.scss';
import { FiLinkedin, FiGithub, FiCodepen, FiMail } from 'react-icons/fi';

const Sidebar = () => {
  useEffect(() => {}, []);

  return (
    <motion.div
      className='sidebar'
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className='social'>
        <Magnetic>
          <a
            data-icon="email"
            href='mailto:robertwagar@gmail.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FiMail className='soc-item soc-icon' />
          </a>
        </Magnetic>
        <Magnetic>
          <a
            data-icon="linkedin"
            href='https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/'
            target='_blank'
            rel='noreferrer noopener'
          >
            {' '}
            <FiLinkedin className='soc-item soc-icon' />
          </a>
        </Magnetic>
        <Magnetic>
          <a
            data-icon="github"
            href='https://github.com/robonexx'
            target='_blank'
            rel='noreferrer'
          >
            <FiGithub className='soc-item soc-icon' />
          </a>
        </Magnetic>
        <Magnetic>
          <a
            data-icon="codepen"
            href='https://codepen.io/robertwagar/pens/public'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FiCodepen className='soc-item soc-icon' />
          </a>
        </Magnetic>
      </div>
    </motion.div>
  );
};

export default Sidebar;
