'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ToolCard({ tool }: { tool: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer"
    >
      <Link href={`/tools/${tool.slug}`}>
        <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src={tool.image}
            alt={tool.name}
            width={64}
            height={64}
            className="mb-4"
          />
          <h3 className="text-xl font-bold">{tool.name}</h3>
          <p className="text-sm text-gray-600">{tool.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
