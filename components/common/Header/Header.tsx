import { PropsWithChildren } from 'react'
import { HeaderProps, StyledH2, StyledH3, StyledTitle } from './Header.style'

export const Title = ({
  children,
  ...props
}: PropsWithChildren<HeaderProps>) => {
  return <StyledTitle {...props}>{children}</StyledTitle>
}

export const H2 = ({ children, ...props }: PropsWithChildren<HeaderProps>) => {
  return <StyledH2 {...props}>{children}</StyledH2>
}
export const H3 = ({ children, ...props }: PropsWithChildren<HeaderProps>) => {
  return <StyledH3 {...props}>{children}</StyledH3>
}
