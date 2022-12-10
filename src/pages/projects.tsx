import Head from 'next/head'
import Arrow from '../components/Arrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectsComponent from '../components/ProjectsComponent'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Portfolio de Alexandre Conte</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <ProjectsComponent/>
      <Footer/>
      <Arrow href="/projects" />
    </div>
  )
}
