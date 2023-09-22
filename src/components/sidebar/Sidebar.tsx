import React, { useEffect } from 'react';
import Magnetic from '../magnetic/magnetic';
import { Link } from 'react-router-dom';

// animation effects
import { motion } from 'framer-motion';

// styles and icons
import './sidebar.scss';
import { FiLinkedin, FiGithub, FiCodepen, FiMail } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  return (
    <motion.div
      className='sidebar'
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className='social'>
        <Magnetic>
          <Link
            data-icon='email'
            to='mailto:robertwagar@gmail.com' // Use 'to' prop for Link
            target='_blank'
            rel='noreferrer noopener'
          >
            <FiMail className='soc-item soc-icon' />
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            data-icon='linkedin'
            to='https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/' // Use 'to' prop for Link
            target='_blank'
            rel='noreferrer noopener'
          >
            <FiLinkedin className='soc-item soc-icon' />
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            data-icon='github'
            to='https://github.com/robonexx' // Use 'to' prop for Link
            target='_blank'
            rel='noreferrer'
          >
            <FiGithub className='soc-item soc-icon' />
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            data-icon='codepen'
            to='https://codepen.io/robertwagar/pens/public' // Use 'to' prop for Link
            target='_blank'
            rel='noreferrer noopener'
          >
            <FiCodepen className='soc-item soc-icon' />
          </Link>
        </Magnetic>
      </div>
    </motion.div>
  );
};

export default Sidebar;
