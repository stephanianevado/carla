import { Container, Div } from 'components/common/Container/Container'
import { MailIcon, MobileIcon } from 'components/common/Icons/Icons'
import { Link } from 'components/common/Link/Link'
import { P } from 'components/common/P/P'
import { Page } from 'components/common/Page/Page'
import { Theme } from 'components/common/Theme'
import { H3, Title } from '../components/common/Header/Header'

export default function Contact() {
  return (
    <Page>
      <Title mb="3">Contact me.</Title>
      <Container direction="column" mt="4">
        <P>{`I'm currently looking for new opportunities.`}</P>
        <P>
          {`I love to code - it was an amazing discovery for me. I'm really eager
          to hear from you and start contributing.`}
        </P>
      </Container>
      <Container mb="4">
        <H3 color={Theme.colors.black}>Say miau!</H3>
      </Container>
      <Container wrap="wrap">
        <Div m="2">
          <MailIcon />
          <p>Write to me anytime!</p>
          <Link href="mailto:stephania.arantxa@gmail.com">
            stephania.arantxa@gmail.com
          </Link>
        </Div>
        <Div m="2">
          <MobileIcon />
          <p>Available 9:00-18:00</p>
          <Link href="tel:+34666366475">+34666366475</Link>
        </Div>
      </Container>
    </Page>
  )
}
