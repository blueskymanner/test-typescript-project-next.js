import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Link from 'next/link'

import Container from '../container'
import Hamburger from '../hamburger'

import styles from './main-menu.module.scss'

const MainMenu = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      innerWidth > 992 && setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {  
    const handleScroll = () => {
      const mainMenu = document.getElementById('mainMenu')
      const offset = mainMenu ? mainMenu.offsetTop : 0
      if (window.scrollY > offset ) {
        setScrolled(true)
      }
      else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (url: string) => {
    window.location.href = url
    window.scrollBy(0, window.screenY - 250)
  }

  return (
    <nav id="mainMenu" className={styles.container} style={scrolled ? {position: 'fixed', top: 0}: {}}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.navHamburger}>
            <Hamburger onPress={toggleModal} isOpen={modalIsOpen} />
          </div>
          <Link href="/">
            <a className={styles.brand}>
              <img src="/assets/img/Okidok logo.png" alt="Okidok logo" />
            </a>
          </Link>
          <ul className={styles.links}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <a onClick={() => handleClick('#featuresSection')}>Features</a>
            </li>
            <li>
              <a onClick={() => handleClick('#servicesSection')}>Services</a>
            </li>
            <li>
              <a onClick={() => handleClick('#reviewsSection')}>Reviews</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
          <div className={styles.contacts}>
            <img src="/assets/img/icon-phone.png" alt="Okidok phone number" />
            <span>1 800 789 123</span>
          </div>
        </div>
        <Modal
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 900,  
              backgroundColor: 'rgba(0, 0, 0, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '12%',
              left: '10%',
              right: '10%',
              backgroundColor: 'white',
            }
          }}
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
          contentLabel=""
        >
          <div className={styles.navModalContainer}>
            <Link href="/">
              <a onClick={toggleModal}>
                Home
              </a>
            </Link>
            <a href="#featuresSection" onClick={toggleModal}>
              Features
            </a>
            <a href="#servicesSection" onClick={toggleModal}>
              Services
            </a>
            <a href="#reviewsSection"onClick={toggleModal}>
              Reviews
            </a>
            <a href="#footer" onClick={toggleModal}>
              Contact
            </a>
          </div>
        </Modal>
      </Container>
    </nav>
  )
}

export default MainMenu
