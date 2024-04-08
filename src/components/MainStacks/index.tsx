import { motion } from 'framer-motion'
import { IconReact, IconLaravel, IconNodeJs } from './StacksIcons'

const animationRightToLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

const animationOrchestration = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const animationOpacity = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'backIn',
    },
  },
}

export function MainStacks() {
  return (
    <motion.div
      className="flex flex-col gap-2 sm:w-4/6 md:w-1/2 lg:w-7/12"
      variants={animationOrchestration}
    >
      <motion.h2
        className="text-center text-lg font-medium text-gray-800 md:text-start dark:text-cyan-500"
        variants={animationOpacity}
      >
        Principais Stacks
      </motion.h2>
      <motion.div
        variants={animationOrchestration}
        className="flex items-center justify-center gap-8"
      >
        <motion.div variants={animationRightToLeft}>
          <IconReact />
        </motion.div>

        <motion.div variants={animationRightToLeft}>
          <IconNodeJs />
        </motion.div>

        <motion.div variants={animationRightToLeft}>
          <IconLaravel />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
