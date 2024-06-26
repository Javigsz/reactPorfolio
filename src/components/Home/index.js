import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const jobArray = 'Computer Science Engineer,'.split('')
  const interestArray = 'Developer'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span><span> </span>
            <span className={`${letterClass} _15`}>&nbsp;Javier Guerrero Sánchez</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />
          </h1>
          <h2>
            Computer Engineer / Fullstack Developer / AI/ML Developer
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Link to="/portfolio" className="flat-button">
            PROJECTS
          </Link>
        </div>

      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
