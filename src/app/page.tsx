'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CaretDoubleRight } from '@phosphor-icons/react'
import Avatar from '@/assets/avatar.jpeg'

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
      duration: 0.6,
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

export default function Home() {
  return (
    <motion.section
      className="m-auto flex min-h-[calc(100vh-10.47rem)] max-w-app flex-col items-center justify-center gap-10 px-6 pb-8 pt-10 sm:px-10 md:gap-6 md:px-12 md:pt-14"
      initial="hidden"
      animate="visible"
      variants={animationOrchestration}
    >
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-8 md:text-start">
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
          className="flex items-center gap-2 rounded bg-gray-600 px-4 py-3 font-semibold text-gray-300 transition duration-200 ease-in hover:text-cyan-400 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700"
        >
          Meus Projetos
          <CaretDoubleRight className="h-5 w-5" weight="bold" />
        </Link>
      </motion.div>

      <div className="flex flex-col gap-2.5 text-gray-800 dark:text-cyan-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.4,
            ease: [0, 0.71, 0.2, 1],
          }}
          className="min-h-0 md:min-h-56"
        >
          <h2 className="mb-2 text-start text-xl font-medium">
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

        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 2,
            ease: [0, 0.71, 0.2, 1],
          }}
          href="https://github.com/CarlosLonghi"
          target="_blank"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=CarlosLonghi&layout=compact&hide_title=true&theme=transparent&border_color=22d3ee&text_color=cffafe"
            alt=""
            className="m-auto w-10/12 rounded-md bg-gradient-to-b from-gray-400 to-gray-600 transition-shadow duration-700 ease-out hover:shadow-lg hover:shadow-cyan-950 sm:w-9/12  md:w-80 dark:from-transparent dark:to-transparent"
          />
        </motion.a>
      </div>
    </motion.section>
  )
}
