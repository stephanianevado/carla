import { Container, Div } from 'components/common/Container/Container'
import { H2, H3, Title } from 'components/common/Header/Header'
import { Page } from 'components/common/Page/Page'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import { A, HomeCardWrapper } from '../style/index.style'

type HomeCardsProps = {
  title: string
  text: string
  href: string
}

export const HomeCard = ({ title, text, href }: HomeCardsProps) => {
  return (
    <HomeCardWrapper>
      <NextLink href={href}>
        <A>
          {`${title} `}
          <p>{text}</p>
        </A>
      </NextLink>
    </HomeCardWrapper>
  )
}

const Home: NextPage = () => (
  <Page>
    <Container direction="column" mb="4">
      <Title>Welcome</Title>
      <H2>To my cat breeds application &hearts;</H2>
      <H3>{`I'm Stephania Nevado`}</H3>
    </Container>
    <Container wrap="wrap">
      <Div>
        <HomeCard
          href="/about"
          title="About"
          text="Get to know this crazy cat lady"
        />
      </Div>
      <Div wrap="wrap">
        <HomeCard
          href="/cats"
          title="Cat breeds"
          text="Our cat breeds community"
        />
      </Div>
      <Div wrap="wrap">
        <HomeCard
          href="/contact"
          title="Contact"
          text="Any question? Get in touch!"
        />
      </Div>
    </Container>
  </Page>
)

export default Home
