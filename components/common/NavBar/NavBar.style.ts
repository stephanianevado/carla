import { Theme } from 'components/common/Theme'
import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6.25rem;
  box-sizing: border-box;
  align-items: center;
  background-color: ${Theme.colors.white};
  padding: 0 2rem;
`

export const Menu = styled.div`
  visibility: hidden;
  ${Theme.breakpoints.laptop} {
    visibility: visible;
  }
`
