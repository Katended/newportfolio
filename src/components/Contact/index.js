import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { ToastContainer, toast } from 'react-toastify';


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(false); // Track loading state
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true); // Set loading state to true
    emailjs
      .sendForm('service_74t8zdm', 'template_e3d8s2l', form.current, 'GHdWyIfCMBbhSjXjW')
      .then(function (response) {
        form.current.reset();
        toast.success('Message successfully sent!', { autoClose: 3000 });
      }, function (error) {
        toast.error('Message couldnt be sent.', { autoClose: 3000 });
      }).finally(() => {
        setLoading(false); // Reset loading state regardless of success or failure
      });

  }

  return (
    <>
      <div className="container contact-page">
        <div >
          <h1>
            <AnimatedLetters
              letterClassName={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={10}
            />
          </h1>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ToastContainer />
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value={loading ? 'SENDING...' : 'SEND'}
                    disabled={loading} />
                </li>
              </ul>
            </form>
            <div>
              <div className="grid item" >


                <dl className="contact-list">
                  <div className="contact-list__item">


                    <a href="mailto:katendedavidjoga@gmail.com" className="c-icon-button c-icon-button--right">
                      <span className="c-icon-button__detail">katendedavidjoga@gmail.com</span>
                      <span className="c-icon-button__icon c-icon-button__icon--right">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.7 23"><use href="#email-icon" /></svg>
                      </span>
                    </a>

                  </div>
                  <div className="contact-list__item">


                    <a href="tel:+256773397960" className="c-icon-button c-icon-button--right">
                      <span className="c-icon-button__detail">+256 773 397 960</span>
                      <span className="c-icon-button__icon c-icon-button__icon--right">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23"><use href="#phone-icon" /></svg>
                      </span>
                    </a>

                  </div>
                </dl>


              </div>

              <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 34.7 23.6"><path id="email-icon" d="M31.9 0H2.8C1.3 0 0 1.2 0 2.8v18c0 1.5 1.3 2.8 2.8 2.8h29.1c1.5 0 2.8-1.2 2.8-2.8v-18c0-1.5-1.3-2.8-2.8-2.8zm-3.3 6.7l-11.2 9.9L6.2 6.7c-.3-.3-.4-.8-.1-1.1.3-.3.8-.4 1.1-.1l10.2 9 10.2-9c.3-.3.8-.3 1.1.1.3.3.3.8-.1 1.1z" /><path id="phone-icon" d="M22 3.8c1.9 4.2 1.2 7.8-3.5 13.2-3.2 3.8-9.5 8.1-16.2 4.7-.2-.1-.4-.2-.5-.3L.2 19.3c-.4-.5-.3-1.2.2-1.6l4.5-3.4c.5-.3 1.2-.3 1.5.2L8 16.6c.3.4.5 1.1-.2 2.2 2.8.6 5.7-2.2 7.6-4.2 2.3-2.5 3.5-4.6 3.2-6.5-.8.2-1.3.2-1.6.1L14.7 7c-.5-.3-.8-.9-.5-1.5L16.7.6c.3-.5.9-.8 1.5-.5l2.3 1.2.4.4c.4.7.8 1.4 1.1 2.1z" /></svg>
            </div>

          </div>



        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
