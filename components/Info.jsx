import ProfilePic from "../src/assets/rmn.jpg"
import EmailIcon from "../src/assets/email.svg"
import LinkedinIcon from "../src/assets/linkedin.svg"

export default function Info() {
  return (
    <>
      <img
        className="profile-pic"
        src={ ProfilePic }
        alt="Profile picture" />
      <section id="info">
        <div className="profile-info">
          <h1 className="name">Ramona Neagu</h1>
          <p className="role">Frontend Developer</p>
          <a className="website" href="" target="_blank"rel="noopener noreferrer">Portfolio website</a>
        </div>
        <div className="contact-buttons">
          <div className="cta-button">
            <img className="email-icon" src={ EmailIcon } alt="" />
            <a className="email-link" href="mailto:office@mondra.ro">Email</a>
          </div>
          <div className="cta-button" id="linkedin">
            <img className="linkedin-icon" src={ LinkedinIcon } alt="" />
            <a className="linkedin-link" href="https://www.linkedin.com/in/ramona-neagu-226a3163/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  )
}
