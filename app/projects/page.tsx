'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi'
import AllProjects from '@/components/AllProjects'

export default function ProjectsPage() {
  const router = useRouter()

  return (
    <>
      <AllProjects />
    </>
  )
}
