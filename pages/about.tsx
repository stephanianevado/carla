import { Container, Div } from 'components/common/Container/Container'
import { Link } from 'components/common/Link/Link'
import { P } from 'components/common/P/P'
import { Page } from 'components/common/Page/Page'
import Image from 'next/image'
import { H2, Title } from '../components/common/Header/Header'
import cat from '../public/cat.svg'

const About = () => {
  return (
    <Page>
      <Title mb="3">Steph.</Title>
      <Container mb="3">
        <H2>
          {`Hello! My name is Stephania Nevado. I'm a cat lover and your next
          future colleague (hopefully).`}
        </H2>
      </Container>
      <Container>
        <Div>
          <P>
            I created this app for you! My cat breeds app lists different cat
            breeds and information about them.
          </P>
          <P>
            You can check the{' '}
            <Link href="/cats" fontSize="medium">
              Cat breeds
            </Link>{' '}
            section for more information.
          </P>
          <P>
            So be prepared with a cup of coffee or a glass of beer and a touch
            of bad cattitude, because your life is about to get fluffy!
          </P>
        </Div>
      </Container>
      <Container>
        <Div mt="5">
          <Image src={cat} alt="cat SVG" width={400} height={400} />
        </Div>
      </Container>
    </Page>
  )
}

export default About
