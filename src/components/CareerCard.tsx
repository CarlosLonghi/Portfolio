'use client'

import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { DotOutline } from '@phosphor-icons/react'

interface CareerCardProps {
  image: StaticImageData
  role: string
  companyTitle: string
  companySite?: string
  companyLocation: string
  contractMode: string
  contractStart: string
  contractEnd: string
  taskDescription: string
}

const card = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export function CareerCard({
  image,
  role,
  companyTitle,
  companySite,
  companyLocation,
  contractMode,
  contractStart,
  contractEnd,
  taskDescription,
}: CareerCardProps) {
  return (
    <motion.article
      variants={card}
      className="flex items-start gap-4 text-gray-200"
    >
      <Image
        className="h-10 w-10 rounded-md"
        src={image}
        alt="Logo Digital One"
      />
      <div className="flex flex-col items-start gap-2 text-sm">
        <h4 className="text-nowrap text-lg font-semibold">{role}</h4>
        <div className="flex items-center gap-1 font-medium">
          <a
            href={companySite}
            target="_blank"
            className="border-cyan-500 underline decoration-cyan-500 underline-offset-4 transition hover:text-cyan-500"
          >
            {companyTitle}
          </a>
          <DotOutline className="h-4 w-4 text-cyan-400" weight="fill" />
          <span className="text-gray-300">{contractMode}</span>
        </div>

        <div className="flex items-center gap-2 font-medium">
          <span className="text-gray-300">{contractStart}</span>
          <span className="text-lg leading-4 text-cyan-400">-</span>
          <span className="text-gray-300">{contractEnd}</span>
        </div>

        <span className="font-medium text-gray-300">{companyLocation}</span>
        <p className="w-1/2 text-sm text-gray-400">{taskDescription}</p>
      </div>
    </motion.article>
  )
}
