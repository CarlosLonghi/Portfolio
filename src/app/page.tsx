'use client'
import { motion } from 'framer-motion'

import RepositoryCard from '@/components/RepositoryCard'

const visible = {
  opacity: 1,
  y: 0,
  x: 0,
  transition: { duration: 0.8 },
}

const animationLeftToRight = {
  hidden: { opacity: 0, x: 100 },
  visible,
}
const animationBottomToTop = {
  hidden: { opacity: 0, y: 100 },
  visible,
}
const animationTopToBottom = {
  hidden: { opacity: 0, y: -100 },
  visible,
}

const item = {
  hidden: { x: 60, opacity: 0 },
  visible,
}

export default function Home() {
  return (
    <motion.section
      className="m-auto flex min-h-[calc(100vh-4.5rem)] max-w-app flex-col items-center justify-center gap-16 px-4 py-4 sm:px-8 md:px-10"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.8 } } }}
    >
      <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-start">
        <motion.a
          variants={animationTopToBottom}
          className="h-40 w-40 overflow-hidden rounded-full border-2 border-cyan-300 transition duration-200 ease-linear hover:shadow-lg hover:shadow-cyan-700"
          href="https://github.com/CarlosLonghi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://github.com/CarlosLonghi.png" />
        </motion.a>

        <div className="md:flex-1">
          <motion.h4
            variants={animationLeftToRight}
            className="mb-4 text-4xl font-semibold"
          >
            Olá<span className="text-cyan-300">,</span>
            <br /> sou Carlos Longhi
            <span className="text-cyan-300">.</span>
            👋
          </motion.h4>
          <motion.p
            variants={animationBottomToTop}
            className="text-lg font-extralight text-cyan-100"
          >
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
          </motion.p>
        </div>
      </div>

      <motion.div variants={item}>
        <a
          href="/projects"
          className="rounded bg-cyan-700 px-4 py-3 font-medium shadow-inner transition ease-linear hover:bg-cyan-800 hover:shadow-cyan-900"
        >
          Meus Projetos
        </a>
      </motion.div>
    </motion.section>
  )
}
