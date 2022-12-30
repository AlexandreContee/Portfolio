import Icons from './Icons'
import Image from "next/image"
import KnowledgeItem from './KnowledgeItem'
import styles from "../styles/Main.module.css"

export default function Main() {

  const [
    bgImage,
    GitImage,
    Html5Image,
    Css3Image,
    JavascriptImage,
    TypeScriptImage,
    NextjsImage,
    ReactImage,
    PythonImage,
    JavaImage,
    CsImage,
    TailwindCssImage,
  ] = Icons

  return (
    <main className={styles.main}>
      <section className={styles.story}>
        <div>
          <h3 className={styles.h3}>História</h3>
          <p className={styles.paragraph}>
            Fui acadêmico de Engenharia Mecânica de 2016 a 2019 no Instituto Federal de Santa Catarina, quando notei que pensava apenas em códigos de programação após cursar algoritmos.
          </p>
          <p className={styles.paragraph}>
            Foi onde obtive meu primeiro contato com programação, através da linguagem C, e no início parecia algo de outro mundo, porém insisti e foi quando me encontrei.
          </p>
          <Image id={styles.img} src={bgImage} alt="A vida começa no final da sua zona de conforto - Neale Donald Walsch" />
        </div>
        <div className={styles.knowledges}>
          <h3>Conhecimentos</h3>
          <ul id={styles.item}>
            <KnowledgeItem src={GitImage} text="Git" />
            <KnowledgeItem src={Html5Image} text="HTML5" />
            <KnowledgeItem src={Css3Image} text="CSS3" />
            <KnowledgeItem src={JavascriptImage} text="JavaScript" />
            <KnowledgeItem src={TypeScriptImage} text="TypeScript" />
            <KnowledgeItem src={NextjsImage} text="NextJs" />
            <KnowledgeItem src={ReactImage} text="React" />
            <KnowledgeItem src={PythonImage} text="Python" />
            <KnowledgeItem src={JavaImage} text="Java" />
            <KnowledgeItem src={CsImage} text="C#" />
            <KnowledgeItem src={TailwindCssImage} text="Tailwind CSS" />
          </ul>
        </div>
      </section>
    </main>
  )
}
