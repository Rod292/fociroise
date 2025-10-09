'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedLogo() {
  return (
    <motion.div
      className="flex-shrink-0 bg-white rounded-full p-8 shadow-lg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.05,
        rotate: [0, -2, 2, -2, 0],
        transition: { duration: 0.5 }
      }}
    >
      <Image
        src="/images/Logo+texte.png"
        alt="FOC Iroise"
        width={350}
        height={117}
        className="h-40 lg:h-52 w-auto"
        priority
      />
    </motion.div>
  )
}
