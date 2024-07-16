import type { ReactNode } from 'react'

interface IconLinkProps {
  href: string
  title: string
  icon: ReactNode
}

export const IconLink: React.FC<IconLinkProps> = ({ href, title, icon }) => {
  return (
    <a href={href} title={title} target='_blank' rel='noopener'>
      {icon}
    </a>
  )
}
