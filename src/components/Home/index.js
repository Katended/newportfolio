import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Me from '../../assets/images/me.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'D', 'a', 'v', 'i', 'd']
  const jobArray = [
    'A',
    ' ',
    'full',
    '-',
    's',
    't',
    'a',
    'c',
    'k',
    '',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span className={`${letterClass} _14`}>&nbsp;</span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={14}
            />
          </h1>
          <h2>
            React, Ruby on Rails, Laravel,Vue.js, Rails, JavaScript, Git, and MySQL
          </h2>
          <Link to="/contact" className="flat-button">
            DOWLOAD CV
          </Link>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div>
          <img src={Me} alt="my-pic" />
        </div>

      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
