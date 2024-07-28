import { useEffect, useState } from 'react'
import { Card } from './common/Card'
import { motion } from 'framer-motion'
const BASE_URL = 'https://api.github.com/users/h3y-retr0/repos'

interface gitHubData {
  name: string
  description: string
  html_url: string
  id: string
}

export const Projects: React.FC = () => {
  const [data, setData] = useState<gitHubData[]>([])

  const fetchGitData = async () => {
    try {
      const res = await fetch(BASE_URL)
      const result = await res.json()

      return result as gitHubData[]
    } catch (e) {
      console.error(e)
      return []
    }
  }
  useEffect(() => {
    fetchGitData().then(data => setData(data))
  }, [])

  return (
    <>
      <div className='flex justify-center pt-[15px]'>
        <span className='italic text-[17px] text-Text-Custom'>
          A collection of my personal projects
        </span>
      </div>
      <div className='absolute text-transparent w-[400px] h-[400px] bg-White-Custom rounded-full blur-3xl opacity-10 translate-x-[320px] z-0'></div>
      <motion.div
        transition={{ type: 'spring', stiffness: 800, damping: 500 }}
        className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 gap-y-8 pb-20 pt-[55px]'
      >
        {data?.map(i => (
          <Card
            key={i.id}
            name={i.name}
            description={i.description}
            url={i.html_url}
          />
        ))}
      </motion.div>
    </>
  )
}
