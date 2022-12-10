import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/ContactItem.module.css'

interface ContactItemProps {
  href: string
  src: string
  txt: string
}

export default function ContactItem({ href, src, txt }: ContactItemProps) {
  return (
    <li className={styles.contactItem}>
      <Link href={href} target="_blank">
        <Image src={src} alt="" width={30} height={30}/>
        <p>{txt}</p>
      </Link>
    </li>
  )
}
