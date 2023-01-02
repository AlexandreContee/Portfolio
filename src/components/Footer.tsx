import linkedInImage from '../../public/images/footer-icons/contacts/linkedin.svg'
import githubImage from '../../public/images/footer-icons/contacts/github.svg'
import instagramImage from '../../public/images/footer-icons/contacts/instagram.svg'
import ContactItem from './ContactItem'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <>
      <div id={styles.footerSpace}></div>
      <footer className={styles.footer}>
        <p>Contatos</p>
        <ul>
          <ContactItem href="https://www.linkedin.com/in/alexandreconteprog/" src={linkedInImage} txt="LinkedIn" />
          <ContactItem href="https://github.com/AlexandreContee" src={githubImage} txt="Github" />
          <ContactItem href="https://www.instagram.com/alexandreconte_oficial/" src={instagramImage} txt="Instagram" />
        </ul>
      </footer>
    </>
  )
}
