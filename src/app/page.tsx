'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Avatar from '@/assets/avatar.jpeg'
import { MainStacks } from '@/components/MainStacks'

import dynamic from 'next/dynamic'
const DynamicGithubStats = dynamic(() => import('@/components/GithubStats'))

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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
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
      className="m-auto flex min-h-[calc(100vh-10.6rem)] max-w-app flex-col items-center gap-16 px-6 pb-12 pt-10 sm:px-10 md:gap-14 md:px-12 md:pb-10 md:pt-14"
      initial="hidden"
      animate="visible"
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

        <motion.div variants={animationOpacity} className="md:flex-1">
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
        className="flex w-full flex-col items-center gap-16 md:gap-14"
        variants={animationOrchestration}
      >
        <MainStacks />

        <DynamicGithubStats />
      </motion.div>
    </motion.section>
  )
}
