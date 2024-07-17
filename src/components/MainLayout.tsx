import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
import { Tools } from './Tools'

export const MainLayout: React.FC = () => {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <>
      <h1 className='text-[44px] font-semibold leading-[normal]'>
        Jorge Gómez
      </h1>
      <div
        className={`relative z-1 text-[18px] leading-7 space-y-10 pt-10 ${
          darkTheme ? 'text-Text-Custom' : 'text-Text-Custom-Light'
        } `}
      >
        <p>Hi, I'm Jorge Gómez, a full stack developer</p>

        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta)
        </p>
        <p>
          desconocido usó una galería de textos y los mezcló de tal manera que
          logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,
          sino que tambien ingresó como texto de relleno en documentos
          electrónicos, quedando esencialmente igual al original. Fue
          popularizado en los 60s con
        </p>

        <p>
          la creación de las hojas "Letraset", las cuales contenian pasajes de
          Lorem Ipsum, y más recientemente con software de autoedición, como por
          ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
        </p>
      </div>
      <Tools />
    </>
  )
}
