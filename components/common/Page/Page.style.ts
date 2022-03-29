import { Theme } from 'components/common/Theme'
import styled from 'styled-components'

export const PageWrapper = styled.main`
  height: 100%;
  padding: 4rem 2rem;
  ${Theme.breakpoints.laptop} {
    padding: 8rem 3rem 0 3rem;
  }
`
