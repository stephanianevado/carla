import { Theme } from 'components/common/Theme'
import styled from 'styled-components'

export const HamburgerWrapper = styled.div`
  ${Theme.breakpoints.laptop} {
    display: none;
  }
`

export const Hamburger = styled.div`
  cursor: pointer;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
`

type MenuProps = {
  open: boolean
}

export const Menu = styled.div<MenuProps>`
  z-index: 2;
  background-color: ${Theme.colors.white};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 10rem;
  transform: ${({ open }: MenuProps) =>
    open ? 'translateX(0)' : 'translateX(100%)'};
`
