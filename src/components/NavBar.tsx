import NavBarItem from "./NavBarItem"
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <NavBarItem text="Principal" href="/" src="/images/header-icons/home.svg"/>
        <NavBarItem text="Certificados" href="/certificates" src="/images/header-icons/certificates.svg"/>
        <NavBarItem text="Projetos" href="/projects" src="/images/header-icons/projects.svg"/>
      </ul>
    </nav>
  )
}
