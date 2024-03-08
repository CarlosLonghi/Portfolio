'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Avatar from '@/assets/avatar.jpeg'

import { IconReact, IconLaravel, IconNodeJs } from '@/assets/IconsTech'

const animationAvatar = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
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

const animationRightToLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
}

const animationTopToBottom = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeIn',
    },
  },
}

const animationOrchestration = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

export default function Home() {
  return (
    <motion.section
      className="m-auto flex min-h-[calc(100vh-10.6rem)] max-w-app flex-col items-center gap-12 px-6 pb-8 pt-10 sm:px-10 md:gap-10 md:px-12 md:pt-14"
      initial="hidden"
      animate="visible"
      variants={animationOrchestration}
    >
      <motion.div
        variants={animationOrchestration}
        className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-8 md:text-start"
      >
        <motion.a
          className="h-32 w-32 overflow-hidden rounded-full border-2 border-cyan-300 transition-shadow duration-700 ease-out hover:shadow-2xl hover:shadow-cyan-600 md:h-40 md:w-40"
          href="https://github.com/CarlosLonghi"
          target="_blank"
          rel="noopener noreferrer"
          variants={animationAvatar}
        >
          <Image src={Avatar} alt="Avatar" />
        </motion.a>

        <motion.div variants={animationTopToBottom} className="md:flex-1">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            Olá<span className="text-cyan-500 dark:text-cyan-300">,</span>
            <br /> sou Carlos Longhi
            <span className="text-cyan-500 dark:text-cyan-300">.</span>
            👋
          </h2>
          <p className="text-sm font-light text-gray-800 md:w-full md:text-lg dark:text-cyan-100">
            Sou Desenvolvedor Full-stack Junior. Trabalho como Desenvolvedor Web
            na{' '}
            <a
              className="text-nowrap font-normal text-gray-800 underline-offset-2 hover:underline dark:text-cyan-300"
              href="https://digitalone.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital One
            </a>
            , e atualmente estou buscando minha vaga Home Office.🏡
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex w-full flex-col gap-2 sm:w-4/6 md:w-1/2 lg:w-7/12"
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

      <motion.div
        className="flex min-h-0 w-full flex-col gap-2 text-gray-800 sm:w-4/6 md:min-h-56 md:w-1/2 lg:w-7/12 dark:text-cyan-500"
        variants={animationOpacity}
      >
        <h2 className="text-center text-lg font-medium md:text-start">
          Contribuições no Github
        </h2>
        <a href="https://github.com/CarlosLonghi" target="_blank">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=CarlosLonghi&border_radius=5&locale=pt_BR&date_format=j%20M%5B%20Y%5D&mode=weekly&background=transparent&stroke=06B6D4&border=06B6D4&ring=22D3EE&sideNums=A5F3FC&sideLabels=22D3EE&dates=CFFAFE&currStreakNum=CFFAFE&fire=EA580C&currStreakLabel=22D3EE"
            alt="GitHub Streak"
            className="w-full rounded-md bg-gradient-to-b from-gray-400 to-gray-600 transition-shadow duration-700 ease-out hover:shadow-lg hover:shadow-cyan-950  dark:from-transparent dark:to-transparent"
          />
        </a>
      </motion.div>
    </motion.section>
  )
}
