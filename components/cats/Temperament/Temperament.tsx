import { Container } from 'components/common/Container/Container'
import { Label } from 'components/common/Label/Label'

export type TemperamentProps = {
  temperament: string
}

export const Temperament = ({ temperament }: TemperamentProps) => {
  if (!temperament) {
    return null
  }

  return (
    <Container m="2" wrap="wrap">
      {temperament.split(', ').map((value, i) => (
        <Label key={`temperament-${i}`} m="1">
          {value}
        </Label>
      ))}
    </Container>
  )
}
