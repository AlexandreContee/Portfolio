import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Certificate.module.css'

interface CertificateProps {
  className?: any
  href: string
  src: string
  name: string
}

export default function Certificate({ className, href, src, name }: CertificateProps) {
  return (
    <li className={styles.it}>
      <Link className={className} href={href} target="_blank">
        <Image alt="" src={src} width={250} height={150} />
        <p>{name}</p>
      </Link>
    </li>
  )
}
