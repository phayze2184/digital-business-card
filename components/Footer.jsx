import FacebookIcon from "../src/assets/facebook.svg"
import InstagramIcon from "../src/assets/instagram.svg"
import GithubIcon from "../src/assets/github.svg"

export default function Footer() {
    return (
        <section id="footer">
          <div className="social-media-links">
            <a href="https://www.facebook.com/ramona.neagu.84" target="_blank" rel="noopener noreferrer" aria-label="Facebook" >
              <img src={ FacebookIcon } alt="Facebook account"/ >
            </a>
             <a href="https://www.instagram.com/phayze4184/" target="_blank" rel="noopener noreferrer"  aria-label="Instagram" >
              <img src={ InstagramIcon } alt="Instagram account"/ >
            </a>
             <a href="https://github.com/phayze2184" target="_blank" rel="noopener noreferrer"  aria-label="Github" >
              <img src={ GithubIcon } alt="Github account"/ >
            </a>
          </div>
        </section>
    )
}
