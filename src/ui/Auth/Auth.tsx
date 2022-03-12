import { motion, Variants } from 'framer-motion';
import { Divider } from 'ui/Divider';
import { Providers } from './Providers';
import { Form } from './Form';

export const Auth = ({ animated }: AuthProps) => {
  return (
    <motion.div
      className="w-full max-w-lg rounded-md border border-dark/10 bg-light/75 py-8 px-3 dark:border-light/30 dark:bg-dark/75 sm:px-6"
      variants={animated ? variants : undefined}
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

// Types
export type AuthProps = {
  animated?: boolean;
};

export const AuthRawCode = `import { motion, Variants } from 'framer-motion';
import { Divider } from 'ui/Divider';
import { Providers } from './Providers';
import { Form } from './Form';

export const Auth = ({ animated }: AuthProps) => {
  return (
    <motion.div
      className="w-full max-w-lg rounded-md border border-dark/10 bg-light/75 py-8 px-3 dark:border-light/30 dark:bg-dark/75 sm:px-6"
      variants={animated ? variants : undefined}
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
    },
  },
};

// Types
export type AuthProps = {
  animated?: boolean;
};`;
