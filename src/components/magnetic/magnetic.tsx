import { ReactNode, useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

const Magnetic = ({ children }: Props) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const mouseMove = (e: MouseEvent) => {
    if (ref.current) {
      const cRef = ref.current;
      const { clientX, clientY } = e;
      const rect = cRef.getBoundingClientRect(); // Use getBoundingClientRect() to get a DOMRect
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);
      setMousePos({ x, y });
    } else return;
  };

  const mouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const { x, y } = mousePos;

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;

/* import { ReactNode, useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

const Magnetic = ({ children }: Props) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const mouseMove = (e: MouseEvent) => {

    if (ref.current && ref.current.contains(e.target as HTMLElement || DOMRect)) {

      const cRef = ref.current;
      const { clientX, clientY } = e;
      const { w, h, l, t } = cRef.getClientRects();
      const x = clientX - (l + w / 2);
      const y = clientY - (t + h / 2);
      setMousePos({ x, y });
    }
  };

  const mouseLeave = () => {
    setMousePos({x: 0, y: 0})
  };

  const { x, y } = mousePos

  return (
    <motion.div onMouseMove={mouseMove} onMouseLeave={mouseLeave} ref={ref}
      animate={{ x, y }}
      transition={{type: 'spring'}}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
 */
