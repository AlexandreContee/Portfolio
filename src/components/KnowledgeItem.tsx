import Image from "next/image"

import styles from '../styles/KnowledgeItem.module.css'

interface KnowledgeItemProps {
  src: any
  text: string
}

export default function KnowledgeItem({ src, text }: KnowledgeItemProps) {
  return (
    <li className={styles.item}>
      <Image src={src} alt='' width={60} height={60}/>
      <p>{text}</p>
    </li>
  )
}
