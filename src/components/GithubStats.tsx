import { motion } from 'framer-motion'

const animationOpacity = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      delay: 1.2,
    },
  },
}

export default function GithubStats() {
  return (
    <motion.div
      className="flex min-h-0 w-full flex-col gap-2 text-gray-800 sm:w-4/6 md:min-h-56 md:w-1/2 lg:w-7/12 dark:text-cyan-500"
      variants={animationOpacity}
    >
      <h2 className="text-center text-lg font-medium md:text-start">
        Contribuições no Github
      </h2>
      <a
        href="https://github.com/CarlosLonghi"
        target="_blank"
        rel="noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=CarlosLonghi&border_radius=5&locale=pt_BR&date_format=j%20M%5B%20Y%5D&mode=weekly&background=transparent&stroke=06B6D4&border=transparent&ring=22D3EE&sideNums=A5F3FC&sideLabels=22D3EE&dates=CFFAFE&currStreakNum=CFFAFE&fire=EA580C&currStreakLabel=22D3EE"
          alt="GitHub Streak"
          className="w-full rounded-md border border-cyan-600 bg-gradient-to-b from-gray-400 to-gray-600 shadow-lg shadow-cyan-950 transition-shadow duration-700 ease-out dark:from-transparent dark:to-transparent"
        />
      </a>
    </motion.div>
  )
}
