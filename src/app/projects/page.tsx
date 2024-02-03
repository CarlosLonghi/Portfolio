'use client'
import RepositoryCard from '@/components/RepositoryCard'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.4,
    },
  },
}

const card = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Projects() {
  return (
    <motion.section
      className="m-auto flex min-h-[calc(100vh-8.05rem)] max-w-app flex-col justify-center px-4 sm:px-8 md:px-10"
      initial="hidden"
      animate="visible"
    >
      <div className="my-8 space-y-8 rounded-lg bg-gray-900 px-4 py-6 shadow-inner shadow-gray-950">
        <h2 className="text-2xl font-semibold dark:text-gray-400">
          Meus Projetos
        </h2>

        <motion.section
          variants={container}
          className="mb-3 flex max-w-4xl  flex-wrap justify-center gap-x-4 gap-y-6 sm:justify-between"
        >
          <motion.article variants={card}>
            <RepositoryCard
              title="Popcorn Polls"
              description="Site para adicionar e avaliar seus filmes favoritos."
              linkSite="https://popcornpolls.netlify.app/"
              linkGithub="https://github.com/CarlosLonghi/Popcorn_Polls"
            />
          </motion.article>

          <motion.article variants={card}>
            <RepositoryCard
              title="Habits App"
              description="Aplicação Web e Mobile para planejar e gerenciar seus Hábitos diários."
              linkGithub="https://github.com/CarlosLonghi/HabitsApp"
            />
          </motion.article>

          <motion.article variants={card}>
            <RepositoryCard
              title="To Do List"
              description="Aplicação para salvar e organizar as suas tarefas diárias."
              linkGithub="https://github.com/CarlosLonghi/ToDo_List"
            />
          </motion.article>

          <motion.article variants={card}>
            <RepositoryCard
              title="Rocket Notes"
              description="Aplicação para salvar suas Anotações e Links."
              linkGithub="https://github.com/CarlosLonghi/Rocket_Notes"
              linkSite="https://rocketnotes-c4du-dev.netlify.app/"
            />
          </motion.article>
        </motion.section>
      </div>
    </motion.section>
  )
}
