import Image from 'next/image'
import NavBar from './NavBar'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar/>
      <section>
        <Image  src="/images/me.jpg" width={300} height={300} alt="" id={styles.image}/>
        <div className={styles.headerDescription}>
          <h1>Alexandre Conte</h1>
          <h2>Estudante de Análise e Desenvolvimento de Sistemas</h2>
          <p>10/01/99</p>
        </div>
      </section>
    </header>
  )
}

export default Header
