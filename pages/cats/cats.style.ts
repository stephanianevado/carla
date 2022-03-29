import { Paper } from 'components/common/Paper/Paper'
import { Theme } from 'components/common/Theme'
import styled from 'styled-components'

export const BreedDetailsContainer = styled(Paper)`
  ${Theme.breakpoints.laptop} {
    width: 50%;
    margin: auto;
  }
`

export const CatsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 20rem));
  justify-content: space-around;
  gap: 2rem;
`
