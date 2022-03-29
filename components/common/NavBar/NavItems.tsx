import Link from 'next/link'
import { NavLink, NavList } from './NavItems.style'

type NavItemsProps = {
  onNavigate?: () => void
}

export const NavItems = ({ onNavigate }: NavItemsProps) => {
  const NavItem = ({ href, text }: { href: string; text: string }) => (
    <li>
      <Link href={href}>
        <NavLink onClick={onNavigate}>{text}</NavLink>
      </Link>
    </li>
  )

  return (
    <>
      <NavList>
        <NavItem href="/about" text="About" />
        <NavItem href="/cats" text="Cat breeds" />
        <NavItem href="/contact" text="Contact" />
      </NavList>
    </>
  )
}
