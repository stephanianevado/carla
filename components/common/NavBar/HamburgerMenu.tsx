import { useState } from 'react'
import { HamburgerIcon, XIcon } from '../Icons/Icons'
import { Hamburger, HamburgerWrapper, Menu } from './HamburgerMenu.style'
import { NavItems } from './NavItems'

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <HamburgerWrapper>
      <Hamburger onClick={() => setOpen(!open)}>
        {open ? <XIcon /> : <HamburgerIcon />}
      </Hamburger>
      <Menu open={open}>
        {open && <NavItems onNavigate={() => setOpen(false)} />}
      </Menu>
    </HamburgerWrapper>
  )
}
