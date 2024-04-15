import { motion } from 'framer-motion'

import { IconLaravel, IconNodeJs, IconReact } from './StacksIcons'

const animationRightToLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const animationOrchestration = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.25,
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
      duration: 0.3,
      ease: 'easeInOut',
      delay: 0.5,
    },
  },
}

export function MainStacks() {
  return (
    <div className="flex flex-col gap-2 sm:w-4/6 md:w-1/2 lg:w-7/12">
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
    </div>
  )
}
