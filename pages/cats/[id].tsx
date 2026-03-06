import { Characteristics } from 'components/cats/Characteristics/Characteristics'
import { Button } from 'components/common/Button/Button'
import { Container, Div } from 'components/common/Container/Container'
import { H3, Title } from 'components/common/Header/Header'
import { Link } from 'components/common/Link/Link'
import { Page } from 'components/common/Page/Page'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { breedsApiClient, CatBreed } from '../../clients/breedsClient'
import { Temperament } from '../../components/cats/Temperament/Temperament'
import { BreedDetailsContainer } from '../../style/cats.style'

type RouteProps = {
  id: string
}

const BreedDetails = ({
  name,
  description,
  temperament,
  origin,
  lifeSpan,
  wikiUrl,
  adaptability,
  hypoallergenic,
  affectionLevel,
  childFriendly,
  dogFriendly,
  indoor,
}: CatBreed) => {
  const router = useRouter()

  return (
    <Page>
      <Title mb="3">{name}</Title>
      <Container m="2">
        {wikiUrl && <Link href={wikiUrl}>Wikipedia</Link>}
      </Container>
      <Temperament temperament={temperament} />
      <BreedDetailsContainer>
        <Container>
          <Div>
            <H3>Description</H3>
            <p>{description}</p>
            <H3>Life span</H3>
            <p>{lifeSpan} years</p>
            <H3>Origin</H3>
            <p>{origin}</p>
            <Characteristics
              adaptability={adaptability}
              hypoallergenic={hypoallergenic}
              affectionLevel={affectionLevel}
              childFriendly={childFriendly}
              dogFriendly={dogFriendly}
              indoor={indoor}
            />
          </Div>
        </Container>
        <Container justifyContent="flex-end">
          <Button onClick={() => router.push('/cats')}>Go back</Button>
        </Container>
      </BreedDetailsContainer>
    </Page>
  )
}

/**
 * No paths are pre-rendered at build time. Pages are generated on-demand
 * when first requested, avoiding external API calls during the build.
 */
export const getStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

/**
 * Statically generate all detail pages for the cat breeds that exist at build time.
 * Details for new cat breeds will be fetched and generated at runtime.
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as RouteProps
  const breed = await breedsApiClient.getBreed(id)
  return { props: breed }
}

export default BreedDetails
