import styles from '../styles/CertificatesComponent.module.css'
import Certificate from "./Certificate"
import { certificatesData } from './data/certificatesData'

export default function CertificatesComponent() {

  const renderMetaCertificates = () => {
    const certificates = certificatesData.filter(c => c.author === 'Meta')
    return (
      certificates.map(c => (
        <Certificate key={c.id} href={c.href} name={c.name} src={c.source} />
      ))
    )
  }

  const renderStaartCertificates = () => {
    const certificates = certificatesData.filter(c => c.author === 'Staart')
    return (
      certificates.map(c => (
        <Certificate key={c.id} href={c.href} name={c.name} src={c.source} />
      ))
    )
  }

  const renderDIOCertificates = () => {
    const certificates = certificatesData.filter(c => c.author === 'DIO')
    return (
      certificates.map(c => (
        <Certificate key={c.id} href={c.href} name={c.name} src={c.source} />
      ))
    )
  }

  const renderNelioCertificates = () => {
    const certificates = certificatesData.filter(c => c.author === 'Nelio Alves')
    return (
      certificates.map(c => (
        <Certificate key={c.id} href={c.href} name={c.name} src={c.source} />
      ))
    )
  }

  const renderProWayCertificates = () => {
    const certificates = certificatesData.filter(c => c.author === 'ProWay')
    return (
      certificates.map(c => (
        <Certificate key={c.id} href={c.href} name={c.name} src={c.source} />
      ))
    )
  }

  const renderOtherCertificates = () => {
    const certificates = certificatesData.filter(c => c.author !== 'Meta' && c.author !== 'Staart' && c.author !== 'DIO' && c.author !== 'Nelio Alves' && c.author !== 'ProWay')

    const rendercertificates = () => certificates.map(c => (
      <Certificate key={c.id} href={c.href} name={c.name} src={c.source} />
    ))

    return (
      certificates.length > 0 ? rendercertificates() : null
    )
  }

  return (
    <main className={styles.certificates}>
      <section>
        <div>
          <h3>Meta Courses</h3>
          <ul>
            {renderMetaCertificates()}
          </ul>
        </div>
        <div>
          <h3>Staart Courses</h3>
          <ul>
            {renderStaartCertificates()}
          </ul>
        </div>
        <div>
          <h3>Nelio Alves Courses</h3>
          <ul>
            {renderNelioCertificates()}
          </ul>
        </div>
        <div>
          <h3>ProWay courses</h3>
          <ul>
            {renderProWayCertificates()}
          </ul>
        </div>
        <div>
          <h3>Digital Innovation One Courses</h3>
          <ul>
            {renderDIOCertificates()}
          </ul>
        </div>
        {renderOtherCertificates() ? (
          <div>
            <h3>Other courses</h3>
            <ul>
              {renderOtherCertificates()}
            </ul>
          </div>
        ) : null}
      </section>
    </main>
  )
}
