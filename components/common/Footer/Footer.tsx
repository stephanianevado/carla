import {
  CodepenIcon,
  EmailIcon,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  ReplitIcon,
} from '../Icons/Icons'
import { A, Contact, Container } from './Footer.style'

export const Footer = () => {
  return (
    <Container>
      <Contact>
        <A
          href="https://github.com/stephanianevado"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </A>
        <A
          href="https://www.linkedin.com/in/stephanianevado/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </A>
        <A
          href="https://www.instagram.com/stephanianevado/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </A>
        <A
          href="https://www.facebook.com/nevadostephania"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </A>
        <A
          href="https://codepen.io/stephanianevado"
          target="_blank"
          rel="noreferrer"
        >
          <CodepenIcon />
        </A>
        <A
          href="https://replit.com/@stephanianevado"
          target="_blank"
          rel="noreferrer"
        >
          <ReplitIcon />
        </A>
        <A
          href="mailto:stephania.arantxa@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <EmailIcon />
        </A>
      </Contact>
    </Container>
  )
}
