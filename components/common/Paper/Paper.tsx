import { Theme } from 'components/common/Theme'
import styled from 'styled-components'

export const Paper = styled.div`
  border-radius: 1rem;
  background-color: ${Theme.colors.white};
  box-shadow: 0px 0px 50px rgba(64, 64, 168, 0.5);
  padding: 1rem;
  ${Theme.breakpoints.laptop} {
    padding: 3rem;
  }
`
