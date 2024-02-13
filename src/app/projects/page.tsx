'use client'
import RepositoryCard from '@/components/RepositoryCard'
import { GithubLogo } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const animationOrchestration = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const animationLeftToRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
}

export default function Projects() {
  return (
    <motion.section
      className="m-auto min-h-[calc(100vh-10.47rem)] max-w-app px-4 pt-4 sm:px-6 md:px-4 md:pt-14"
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-10 rounded-lg px-6 pb-12 pt-6 sm:px-12">
        <motion.div className="md:w-1/2" variants={animationLeftToRight}>
          <div className="flex items-center gap-4">
            <h2 className="mb-2 text-3xl font-semibold">Projetos</h2>
            <GithubLogo className="-mt-1 h-8 w-8 text-gray-700 dark:text-cyan-500" />
          </div>
          <p className="mb-4 w-full text-sm text-gray-800 dark:text-gray-400">
            Alguns dos meus principais projetos, como aplicações Web
            responsivas, aplicações Mobile e mais.
          </p>
          <a
            href="https://github.com/CarlosLonghi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit py-2 text-base font-semibold text-gray-700 underline decoration-gray-500 underline-offset-8 transition hover:text-gray-800 hover:decoration-cyan-500 dark:text-cyan-100 dark:decoration-cyan-400 dark:hover:text-cyan-400 dark:hover:decoration-cyan-500"
          >
            Ver Repositórios no Github
          </a>
        </motion.div>

        <motion.div
          variants={animationOrchestration}
          className="mb-3 flex max-w-app flex-wrap justify-center gap-x-6 gap-y-6 sm:gap-y-8 md:gap-y-8 lg:justify-between"
        >
          <RepositoryCard
            title="Popcorn Polls"
            description="Site para adicionar e avaliar seus filmes favoritos."
            linkSite="https://popcornpolls.netlify.app/"
            linkGithub="https://github.com/CarlosLonghi/Popcorn_Polls"
          />

          <RepositoryCard
            title="Rocket Notes"
            description="Aplicação para salvar suas Anotações e Links."
            linkGithub="https://github.com/CarlosLonghi/Rocket_Notes"
            linkSite="https://rocketnotes-c4du-dev.netlify.app/"
          />

          <RepositoryCard
            title="Habits App"
            description="Aplicação Web e Mobile para planejar e gerenciar seus Hábitos diários."
            linkGithub="https://github.com/CarlosLonghi/HabitsApp"
          />

          <RepositoryCard
            title="To Do List"
            description="Aplicação para salvar e organizar as suas tarefas diárias."
            linkGithub="https://github.com/CarlosLonghi/ToDo_List"
          />

          <RepositoryCard
            title="Pomodoro"
            description="Aplicação para execultar tarefas usando a metodologia Pomodoro"
            linkGithub="https://github.com/CarlosLonghi/Pomodoro"
          />

          <RepositoryCard
            title="Dashboard"
            description="Dashboard usando React com Tailwindcss"
            linkGithub="https://github.com/CarlosLonghi/Dashboard_Tailwindcss"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
