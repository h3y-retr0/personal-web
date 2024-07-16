import { Link, useLocation } from 'wouter'

export const ProjectsNav: React.FC = () => {
  const [location] = useLocation()
  return (
    <div className='w-full flex justify-center text-[23px] font-semibold text-Primary leading-[normal] gap-x-8'>
      <Link
        href='/projects/personal'
        className={`hover:text-White-Custom ${
          location === '/projects/personal' && 'text-White-Custom'
        }`}
      >
        Personal
      </Link>
      <Link
        href='/projects/other'
        className={`hover:text-White-Custom ${
          location === '/projects/other' && 'text-White-Custom'
        }`}
      >
        Other
      </Link>
    </div>
  )
}
