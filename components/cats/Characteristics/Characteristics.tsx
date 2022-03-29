import { CatBreed } from 'clients/breedsClient'
import { H3 } from 'components/common/Header/Header'

export type CharacteristicsProps = Pick<
  CatBreed,
  | 'adaptability'
  | 'hypoallergenic'
  | 'affectionLevel'
  | 'childFriendly'
  | 'dogFriendly'
  | 'indoor'
>

export const Characteristics = ({
  adaptability,
  hypoallergenic,
  affectionLevel,
  childFriendly,
  dogFriendly,
  indoor,
}: CharacteristicsProps) => {
  const boolAsText = (boolValue: number) => {
    return boolValue > 0 ? 'Yes' : 'No'
  }

  const valueAsLevel = (value: number) => {
    return value < 2 ? 'Low' : value < 4 ? 'Medium' : 'High'
  }

  return (
    <>
      <H3>Characteristics</H3>
      <ul>
        <li>Hypoallergenic: {boolAsText(hypoallergenic)}</li>
        <li>Indoor cat: {boolAsText(indoor)}</li>
        <li>Adaptability: {valueAsLevel(adaptability)}</li>
        <li>Affection level: {valueAsLevel(affectionLevel)}</li>
        <li>Child friendly: {valueAsLevel(childFriendly)}</li>
        <li>Dog friendly: {valueAsLevel(dogFriendly)}</li>
      </ul>
    </>
  )
}
