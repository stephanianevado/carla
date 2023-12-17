import axios from 'axios'

export const getAxios = () => axios.create()

export type CatImage = {
  height: number
  id: string
  url?: string
  width: number
}

export type CatBreed = {
  id: string
  name: string
  description: string
  image: CatImage
  lifeSpan: string
  wikiUrl?: string
  temperament: string
  origin: string
  hypoallergenic: number
  adaptability: number
  affectionLevel: number
  childFriendly: number
  dogFriendly: number
  indoor: number
}

type CatBreedResponse = Omit<
  CatBreed,
  'lifeSpan' | 'wikiUrl' | 'affectionLevel' | 'childFriendly' | 'dogFriendly'
> & {
  life_span: string
  wikipedia_url: string
  affection_level: number
  child_friendly: number
  dog_friendly: number
}

const URL = 'https://api.thecatapi.com/v1'

const mapResponse = ({
  life_span,
  wikipedia_url,
  affection_level,
  child_friendly,
  dog_friendly,
  ...params
}: CatBreedResponse) => ({
  lifeSpan: life_span || null,
  wikiUrl: wikipedia_url || null,
  affectionLevel: affection_level || null,
  childFriendly: child_friendly || null,
  dogFriendly: dog_friendly || null,
  ...params,
})

export const breedsApiClient = {
  getBreeds: () =>
    getAxios()
      .get<CatBreedResponse[]>(`${URL}/breeds?attach_breed=0`)
      .then(({ data }) => data.map((breed) => mapResponse(breed))),
  getBreedImage: (id: string) =>
    getAxios()
      .get<CatImage[]>(
        `${URL}/images/search?limit=67&breed_ids=${id}&api_key=${process.env.CAT_API_KEY}&`
      )
      .then(({ data }) => data.map((image) => image)),
  getBreed: (id: string) =>
    getAxios()
      .get<CatBreedResponse>(`${URL}/breeds/${id}`)
      .then(({ data }) => mapResponse(data)),
}
