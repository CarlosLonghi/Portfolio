'use client'
import { motion } from 'framer-motion'

import RepositoryCard from '@/components/RepositoryCard'

const visible = { opacity: 1, y: 0, x: 0, transition: { duration: 1 } }

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

export default function Home() {
  return (
    <motion.section
      className="m-auto flex min-h-screen max-w-app flex-col items-center justify-center px-8 py-4 md:flex-row md:space-x-10"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.6 } } }}
    >
      <motion.div
        className="mb-8 mt-6 flex flex-col items-center gap-4"
        variants={animationTopToBottom}
      >
        <a
          className="h-40 w-40 overflow-hidden rounded-full border-2 border-cyan-300 transition duration-200 ease-linear hover:shadow-lg hover:shadow-cyan-700"
          href="https://github.com/CarlosLonghi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://github.com/CarlosLonghi.png" />
        </a>
      </motion.div>

      <motion.div className="flex-1 px-10" variants={animationBottomToTop}>
        <motion.h4
          variants={animationLeftToRight}
          className="mb-4 text-4xl font-semibold"
        >
          Olá<span className="text-cyan-300">,</span>
          <br /> sou Carlos Longhi
          <span className="text-cyan-300">.</span>
          👋
        </motion.h4>
        <p className="text-lg font-extralight text-cyan-100">
          Sou Desenvolvedor Junior Web Full-stack. Trabalho como Desenvolvedor
          Web Junior na{' '}
          <a
            className="text-cyan-300 underline-offset-2 hover:underline"
            href="https://digitalone.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital One
          </a>
          , e atualmente estou buscando minha vaga Home Office.🏡
        </p>
      </motion.div>

      {/*
        * Fazer página Projetos para esse conteúdo:         
        <motion.h2
          className="text-2xl font-semibold dark:text-gray-400"
          variants={animationBottomToTop}
        >
          Meus Projetos
        </motion.h2>
        <motion.div
          variants={animationBottomToTop}
          className="mt-2 h-px bg-gray-400"
        />

        <section className="mb-3 mt-3 flex max-w-4xl flex-wrap justify-center gap-x-4 gap-y-6 sm:justify-between">
          <motion.article variants={animationBottomToTop}>
            <RepositoryCard
              title="Popcorn Polls"
              description="Site para adicionar e avaliar seus filmes favoritos."
              linkSite="https://popcornpolls.netlify.app/"
              linkGithub="https://github.com/CarlosLonghi/Popcorn_Polls"
            />
          </motion.article>

          <motion.article variants={animationBottomToTop}>
            <RepositoryCard
              title="Habits App"
              description="Aplicação Web e Mobile para planejar e gerenciar seus Hábitos diários."
              linkGithub="https://github.com/CarlosLonghi/HabitsApp"
            />
          </motion.article>

          <motion.article variants={animationBottomToTop}>
            <RepositoryCard
              title="To Do List"
              description="Aplicação para salvar e organizar as suas tarefas diárias."
              linkGithub="https://github.com/CarlosLonghi/ToDo_List"
            />
          </motion.article>

          <motion.article variants={animationBottomToTop}>
            <RepositoryCard
              title="Rocket Notes"
              description="Aplicação para salvar suas Anotações e Links."
              linkGithub="https://github.com/CarlosLonghi/Rocket_Notes"
              linkSite="https://rocketnotes-c4du-dev.netlify.app/"
            />
          </motion.article> 
        </section>
        */}
    </motion.section>
  )
}
