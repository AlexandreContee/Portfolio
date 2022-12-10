import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/NavBarItem.module.css'

interface NavBarItemProps {
  href: string
  src: string
  text: string
}

export default function NavBarItem({ href, src, text }: NavBarItemProps) {

  return (
    <li className={styles.item}>
      <Link href={href}>
        <Image src={src} width={20} height={20} alt="" />
        <span>{text}</span>
      </Link>
    </li>
  )
}
