'use client'

import { motion } from 'framer-motion'
import { DotOutline, Steps } from '@phosphor-icons/react'

const animationOrchestration = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
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

const card = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Carrer() {
  return (
    <motion.section
      className="m-auto min-h-[calc(100vh-8.29rem)] max-w-app px-4 pt-14 sm:px-6 md:px-4"
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-10 rounded-lg px-6 pb-12 pt-6 sm:px-12">
        <motion.div className="md:w-1/2" variants={animationLeftToRight}>
          <div className="flex items-center gap-4">
            <h2 className="mb-2 text-3xl font-semibold">Carreira</h2>
            <Steps className="h-8 w-8 text-cyan-500" />
          </div>
          <p className="mb-4 w-full text-sm text-gray-400">
            Minha tragetória profissional como desenvolvedor até o momento.
          </p>
          <a
            href="https://www.linkedin.com/in/c4du-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit py-2 text-sm font-semibold text-cyan-100 underline decoration-cyan-400 underline-offset-8 transition hover:text-cyan-400 hover:decoration-cyan-500"
          >
            Ver no Linkedin
          </a>
        </motion.div>

        <motion.div
          variants={animationOrchestration}
          className="mb-3 flex max-w-app flex-col justify-start gap-x-6 gap-y-6 sm:gap-y-8 md:gap-y-8 lg:justify-between"
        >
          <motion.article
            variants={card}
            className="flex items-start gap-4 text-gray-200"
          >
            <img
              className="h-10 w-10 rounded-md"
              src="https://shorturl.at/rTU36"
              alt="Logo Digital One"
            />
            <div className="flex flex-col items-start gap-2 text-sm">
              <h4 className="text-nowrap text-lg font-semibold">
                Desenvolvedor FullStack Web
              </h4>
              <div className="flex items-center gap-1 font-medium">
                <a
                  href="https://digitalone.com.br"
                  target="_blank"
                  className="border-cyan-500 underline decoration-cyan-500 underline-offset-4 transition hover:text-cyan-500"
                >
                  Digital One
                </a>
                <DotOutline className="h-4 w-4 text-cyan-400" weight="fill" />
                <span className="text-gray-300">Full-time</span>
              </div>

              <div className="flex items-center gap-2 font-medium">
                <span className="text-gray-300">Abril de 2023</span>
                <span className="text-lg leading-4 text-cyan-400">-</span>
                <span className="text-gray-300">Presente</span>
              </div>

              <span className="font-medium text-gray-300">
                Cianorte PR, Brasil
              </span>
              <p className="w-1/2 text-sm text-gray-400">
                Criar novas páginas web gerenciáveis, adicionar novas features e
                funcionalidades aos sistemas existentes.
              </p>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  )
}
