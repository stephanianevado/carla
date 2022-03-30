import { Theme } from 'components/common/Theme'
import styled from 'styled-components'
import { FOOTER_HEIGHT } from '../Footer/Footer.style'
import { NAVBAR_HEIGHT } from '../NavBar/NavBar.style'

export const PageWrapper = styled.main`
  padding: 4rem 2rem 0 2rem;
  min-height: calc(100vh - ${FOOTER_HEIGHT + NAVBAR_HEIGHT}rem);
  ${Theme.breakpoints.laptop} {
    padding: 8rem 3rem 0 3rem;
  }
`
