import { Theme } from 'components/common/Theme'
import styled from 'styled-components'

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  ${Theme.breakpoints.laptop} {
    flex-direction: row;
  }
`

export const NavLink = styled.a`
  padding: 0 1.3rem;
  text-decoration: none;
  font-size: ${Theme.fontSize.medium};
  cursor: pointer;
`
