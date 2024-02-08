'use client'
import RepositoryCard from '@/components/RepositoryCard'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
}
const animationLeftToRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
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
      className="m-auto flex min-h-[calc(100vh-8.05rem)] max-w-app flex-col justify-center px-4 sm:px-6 md:px-4"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="space-y-10 rounded-lg px-6 pb-12 pt-6 sm:px-12">
        <motion.div className="md:w-1/2" variants={animationLeftToRight}>
          <h2 className="mb-2 text-3xl font-semibold">Projetos</h2>
          <p className="mb-4 w-full text-sm text-gray-400">
            Alguns dos meus principais projetos, como aplicações Web
            responsivas, aplicações Mobile e mais.
          </p>
          <a
            href="https://github.com/CarlosLonghi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit py-2 text-sm font-semibold text-cyan-100 underline decoration-cyan-400 underline-offset-8 transition hover:text-cyan-400 hover:decoration-cyan-500"
          >
            Ver Repositórios no Github
          </a>
        </motion.div>

        <div className="mb-3 flex max-w-app flex-wrap justify-center gap-x-6 gap-y-6 sm:gap-y-8 md:gap-y-8 lg:justify-between">
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
        </div>
      </div>
    </motion.section>
  )
}
