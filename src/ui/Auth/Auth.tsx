import { motion, Variant, Variants } from 'framer-motion';
import { Divider } from 'ui/Divider';
import { Providers } from './Providers';
import { Form } from './Form';

export const Auth = () => {
  return (
    <motion.div
      className="w-full max-w-lg rounded-md border border-slate-700 bg-transparent px-6 py-8"
      variants={variants}
      animate="animate"
      initial="initial"
    >
      <Providers providers={['google', 'apple', 'github']} />
      <Divider text="or continue with" />
      <Form />
    </motion.div>
  );
};

const variants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      // staggerChildren: 0.1,
    },
  },
};