import Image from "next/image";
import Link from "next/link";
import arrowImage from "../../public/images/footer-icons/arrow-up.svg"
import styles from '../styles/Arrow.module.css'

interface ArrowProps {
  href: string
}

export default function Arrow({ href }: ArrowProps) {
  return (
    <Link href={href}>
      <div id={styles.arrow}>
        <Image src={arrowImage} width={30} height={30} alt="" />
      </div>
    </Link>
  )
}
