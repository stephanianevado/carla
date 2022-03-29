import { CatBreed } from 'clients/breedsClient'
import { useKeyPress } from 'hooks/useKeyPress'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useFocusedBreed = (breeds: CatBreed[]) => {
  const router = useRouter()
  const rightPress = useKeyPress('ArrowRight')
  const leftPress = useKeyPress('ArrowLeft')
  const enterPress = useKeyPress('Enter')
  const [focusedBreed, setFocusedBreed] = useState(0)

  useEffect(() => {
    if (focusedBreed < breeds.length && rightPress) {
      setFocusedBreed(focusedBreed + 1)
    }
  }, [rightPress])

  useEffect(() => {
    if (focusedBreed > 0 && leftPress) {
      setFocusedBreed(focusedBreed - 1)
    }
  }, [leftPress])

  useEffect(() => {
    if (enterPress) {
      router.push(`/cats/${breeds[focusedBreed].id}`)
    }
  }, [enterPress])

  return { focusedBreed }
}
