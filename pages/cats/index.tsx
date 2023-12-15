import { Card } from 'components/common/Card/Card'
import { Container } from 'components/common/Container/Container'
import { Title } from 'components/common/Header/Header'
import { Link } from 'components/common/Link/Link'
import { Page } from 'components/common/Page/Page'
import { SearchInput } from 'components/common/SearchInput/SearchInput'
import { Fragment } from 'react'
import { breedsApiClient, CatBreed } from '../../clients/breedsClient'
import { useFocusedBreed } from '../../components/cats/hooks/useFocusedBreed'
import { useSearchBreed } from '../../components/cats/hooks/useSearchBreed'
import { Label } from '../../components/common/Label/Label'
import { CatsContainer } from '../../style/cats.style'

type CatsProps = {
  breeds: CatBreed[]
}

const Cats = ({ breeds }: CatsProps) => {
  const { query, searchResults, onSearch } = useSearchBreed(breeds)
  const { focusedBreed } = useFocusedBreed(breeds)

  if (!breeds) {
    return null
  }

  return (
    <Page>
      <Title>Cat breeds</Title>
      <Container my="3" justifyContent="flex-end">
        <SearchInput value={query} onChange={onSearch} />
      </Container>
      <CatsContainer>
        {searchResults.map(
          ({ id, image, name, description, lifeSpan, wikiUrl }, i) => (
            <Fragment key={id}>
              {image?.url && (
                <Card
                  active={i === focusedBreed}
                  image={image.url}
                  title={name}
                  description={description}
                  href={`/cats/${id}`}
                  footer={
                    <>
                      <Label>{lifeSpan}</Label>
                      {wikiUrl && <Link href={wikiUrl}>Wikipedia</Link>}
                    </>
                  }
                />
              )}
            </Fragment>
          )
        )}
      </CatsContainer>
    </Page>
  )
}

/**
 * Fetch all cats on demand (SSR) so that any new cats that have been
 * added after build time show up on the page.
 */
export async function getServerSideProps() {
  let breedsWithImages = null

  try {
    const response = await breedsApiClient.getBreeds()
    const breedsWithId = response.filter((breed) => !!breed.id)

    const breedImagePromises = breedsWithId.map(async (breed) => {
      try {
        const imageResponse = await breedsApiClient.getBreedImage(breed.id)
        const image = imageResponse.length > 0 ? imageResponse[0] : null
        return {
          ...breed,
          image: image,
        }
      } catch (error) {
        console.error('FAILED TO GET IMAGE BREED:', error)
        return breed
      }
    })
    breedsWithImages = await Promise.all(breedImagePromises)
  } catch (e) {
    console.log('FAILED TO GET BREEDS', e)
  }

  return {
    props: { breeds: breedsWithImages },
  }
}

export default Cats
