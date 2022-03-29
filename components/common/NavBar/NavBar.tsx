import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/logo.svg'
import { HamburgerMenu } from './HamburgerMenu'
import { Menu, Nav } from './NavBar.style'
import { NavItems } from './NavItems'
import { NavLink } from './NavItems.style'

export const NavBar = () => {
  return (
    <>
      <Nav>
        <Link href="/">
          <NavLink>
            <Image src={logo} alt="logo SVG" width={90} height={90} />
          </NavLink>
        </Link>
        <Menu>
          <NavItems />
        </Menu>
      </Nav>
      <HamburgerMenu />
    </>
  )
}
