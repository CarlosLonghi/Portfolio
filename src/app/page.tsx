'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { CaretDoubleRight } from '@phosphor-icons/react'

const animationRightToLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
}

const animationTopToBottom = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
}

const animationOrchestration = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 2.5,
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
      className="m-auto flex min-h-[calc(100vh-8.05rem)] max-w-app flex-col items-center justify-center gap-6 px-4 py-4 sm:px-8 md:gap-16 md:px-10"
      initial="hidden"
      animate="visible"
      variants={animationOrchestration}
    >
      <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-start">
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="h-32 w-32 overflow-hidden rounded-full border-2 border-cyan-300 transition-shadow duration-700 ease-out hover:shadow-2xl hover:shadow-cyan-600 md:h-40 md:w-40"
          href="https://github.com/CarlosLonghi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://github.com/CarlosLonghi.png" />
        </motion.a>

        <motion.div variants={animationTopToBottom} className="md:flex-1">
          <h4 className="mb-4 text-4xl font-semibold">
            Olá<span className="text-cyan-300">,</span>
            <br /> sou Carlos Longhi
            <span className="text-cyan-300">.</span>
            👋
          </h4>
          <p className="text-lg font-extralight text-cyan-100">
            Sou Desenvolvedor Full-stack Junior. Trabalho como Desenvolvedor Web
            na{' '}
            <a
              className="text-nowrap text-cyan-300 underline-offset-2 hover:underline"
              href="https://digitalone.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital One
            </a>
            , e atualmente estou buscando minha vaga Home Office.🏡
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={animationRightToLeft}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.2 },
        }}
      >
        <Link
          href="/projects"
          className="flex items-center gap-2 rounded bg-cyan-700 px-4 py-3 font-medium shadow-inner transition ease-linear hover:bg-cyan-800 hover:shadow-cyan-950 dark:hover:text-cyan-200"
        >
          Meus Projetos
          <CaretDoubleRight className="h-5 w-5" />
        </Link>
      </motion.div>

      <div className="min-h-52">
        <a href="https://github.com/CarlosLonghi" target="_blank">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=CarlosLonghi&border_radius=5&locale=pt_BR&date_format=j%20M%5B%20Y%5D&mode=weekly&background=030712&stroke=06B6D4&border=06B6D4&ring=22D3EE&sideNums=A5F3FC&sideLabels=22D3EE&dates=CFFAFE&currStreakNum=CFFAFE&fire=EA580C&currStreakLabel=22D3EE"
            alt="GitHub Streak"
            className="transition-shadow duration-700 ease-out hover:shadow-2xl hover:shadow-cyan-950"
          />
        </a>
      </div>
    </motion.section>
  )
}
