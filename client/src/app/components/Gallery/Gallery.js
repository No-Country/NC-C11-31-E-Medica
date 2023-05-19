import Carousel from './Carousel'
import { useEffect, useState } from 'react'

const Gallery = () => {
  const [windowSize, setWindowSize] = useState([window.innerWidth])

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth])
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  if (windowSize >= 768) {
    return (
      <section>
        <div className='galleryText'>
          <h4>Publicidades varias</h4>
          <h4>Programas de prevención temprana entre otros estudios</h4>
        </div>
        <article className='gallery'>
          <img className='galleryImg' src='/images/carousel1.jpg' alt='Lab' />
          <img className='galleryImg' src='/images/carousel2.jpg' alt='Medics' />
          <img className='galleryImg' src='/images/carousel3.jpg' alt='Emergency' />
        </article>
      </section>
    )
  } else {
    return <Carousel />
  }
}

export default Gallery
