'use client'

import { motion } from 'framer-motion'
import { CareerCard } from '@/components/CareerCard'
import { Steps } from '@phosphor-icons/react'
import DigitalOneLogo from '@/assets/digitalone_agencia_logo.jpeg'

const animationOrchestration = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      delay: 0.4,
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

export default function Carrer() {
  return (
    <motion.section
      className="m-auto min-h-[calc(100vh-5.9rem)] max-w-app px-6 pb-8 pt-20 sm:px-10 md:min-h-[calc(100vh-10.6rem)] md:px-12 md:pt-14"
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-10 rounded-lg">
        <motion.div className="md:w-1/2" variants={animationLeftToRight}>
          <div className="flex items-center gap-4">
            <h2 className="mb-2 text-2xl font-semibold md:text-3xl">
              Carreira
            </h2>
            <Steps className="h-8 w-8 text-gray-700 dark:text-cyan-500" />
          </div>
          <p className="mb-4 w-full text-sm text-gray-800 dark:text-gray-400">
            Minha tragetória profissional como desenvolvedor até o momento.
          </p>
          <a
            href="https://www.linkedin.com/in/c4du-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit py-2 text-base font-semibold text-gray-700 underline decoration-gray-500 underline-offset-8 transition hover:text-gray-800 hover:decoration-cyan-500 dark:text-cyan-100 dark:decoration-cyan-400 dark:hover:text-cyan-400 dark:hover:decoration-cyan-500"
          >
            Ver no Linkedin
          </a>
        </motion.div>

        <motion.div
          variants={animationOrchestration}
          className="mb-3 flex max-w-app flex-col justify-start gap-x-6 gap-y-6 sm:gap-y-8 md:gap-y-8 lg:justify-between"
        >
          <CareerCard
            image={DigitalOneLogo}
            role="Desenvolvedor FullStack Web"
            companyTitle="Digital One"
            companySite="https://digitalone.com.br"
            companyLocation="Cianorte PR, Brasil"
            contractMode="Full-time"
            contractStart="Abril de 2023"
            contractEnd="Presente"
            taskDescription="Criar novas páginas web gerenciáveis, adicionar novas features e dar
            manutenção aos sistemas existentes."
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
