import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Resume from '../../assets/Resume.pdf';

const Testimonies = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>

            <div className="testimonies-page">

                <div>

                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['T', 'e', 's', 't', 'i', 'm ', 'o', 'n', 'i', 'e', 's']}
                            idx={11}
                        />
                    </h1>


                </div>
                <div >
                    <ul class="team">
                        <li className="member">
                            <div className="thumb"><img src="https://media.licdn.com/dms/image/D4E03AQEh0rI3rD8Vxg/profile-displayphoto-shrink_100_100/0/1687769610230?e=1705536000&v=beta&t=L9wwOBLvBcKlDTJ9lOotoXLIC9ihxWO60z0VTYIn6mA" /></div>
                            <div className="description">
                                <h3>Abenezer Addisu</h3>
                                <p>I highly recommend Katende David as a front-end web developer. Katende David is extremely knowledgeable in HTML, CSS, and JavaScript<a href="https://www.linkedin.com/in/katendedavid" target='_blank'>more...</a></p>
                            </div>
                        </li>
                        <li className="member">
                            <div className="thumb"><img src="https://media.licdn.com/dms/image/D4D35AQERM24b7kbPbA/profile-framedphoto-shrink_100_100/0/1697680799577?e=1700546400&v=beta&t=66JaDPun2N7k9yh0F7JYcPByNYztuFc5g-gwmKdoKBQ" /></div>
                            <div className="description">
                                <h3>Nahid Raihan Sardar</h3>
                                <p>I had the privilege of working alongside Katende David as a coding partner for a week during our group capstone project at Microverse, and I am delighted to provide a recommendation based<a href="https://www.linkedin.com/in/katendedavid" target='_blank'>more...</a></p>
                            </div>
                        </li>
                        <li className="member">
                            <div className="thumb"><img src="https://media.licdn.com/dms/image/D4D35AQHe-5I3B5LXAw/profile-framedphoto-shrink_100_100/0/1687552533261?e=1700546400&v=beta&t=gGjXphH9mEbseCxnRzn6zc6Tn0-25-8Cee7xC03qotk" /></div>
                            <div className="description">
                                <h3>Shalini Nayan</h3>
                                <p>Katende David is a great web developer and coding partner. Katende always showed strong web development knowledge and impressed me with his Coding skill's talent<a href="https://www.linkedin.com/in/katendedavid" target='_blank'>more...</a></p>
                            </div>
                        </li>



                    </ul>
                    <a className="flat-button"
                        href={Resume}
                        download="Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        DOWLOAD CV
                    </a>


                    <Link to="/contact" className="flat-button">
                        LET'S TALK
                    </Link>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Testimonies 
