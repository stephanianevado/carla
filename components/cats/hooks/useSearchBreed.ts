import { CatBreed } from 'clients/breedsClient'
import { ChangeEvent, useEffect, useState } from 'react'

export const useSearchBreed = (breeds: CatBreed[]) => {
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState<CatBreed[]>([])

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    const results = breeds.filter((breed) =>
      breed.name.toLowerCase().includes(query)
    )
    setSearchResults(results)
  }, [breeds, query])

  return { query, searchResults, onSearch }
}
