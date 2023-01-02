import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/ProjectsComponent.module.css'
import { projectsData } from './data/projectsData'

export default function ProjectsComponent() {
  return (
    <main className={styles.projects}>
      <div>
        <h3>Projetos</h3>
      </div>
      <section>
        <ul>
          {projectsData.map(p => (
            <li key={p.id} className={styles.item}>
              <Link href={p.href} target="_blank">
                <Image src={p.source} width={250} height={250} alt='' />
                <p>{p.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

