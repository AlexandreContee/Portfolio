import Image from "next/image"
import Link from "next/link"
import styles from '../styles/CertificatesComponent.module.css'
import { certificatesData } from './data/certificatesData'

export default function CertificatesComponent() {
  return (
    <main className={styles.certificates}>
      <section>
        <ul>
          {certificatesData.map(c => (
            <Link className={styles.item} key={c.id} href={c.href} target="_blank">
              <Image alt="" src={c.source} width={250} height={150} />
              <p>{c.name}</p>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  )
}

