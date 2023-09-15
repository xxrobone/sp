import { useEffect } from 'react';
import hoverEffect from 'hover-effect';
import { motion } from 'framer-motion';
import overlay from '../../assets/images/distortion.png';

import './hw.scss';

type Props = {
  img1: string;
  img2: string;
  title: string;
  subtitle: string;
  desc: string;
};

const HoverEffect = ({ img1, img2, title, subtitle, desc }: Props) => {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('.item-image'),
      intensity: 0.3,
      image1: img1,
      image2: img2,
      displacementImage: overlay,
    });
  }, [img1, img2]);

  return (
    <div>
      <motion.div
        className='container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, type: 'spring' }}
        transition={{ duration: 0.6, delay: 2, ease: 'easeInOut' }}
      >
        <div className='item'>
          <div className='item-header'>
            <div className='item-header-heading'>{title}</div>
            <div className='item-header-heading2'>{subtitle}</div>
          </div>
          <div className='item-image'></div>
          <div className='item-footer'>
            <div className='item-footer-quote'>{desc}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HoverEffect;
