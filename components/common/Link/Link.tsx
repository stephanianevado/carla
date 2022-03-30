import NextLink, { LinkProps } from 'next/link'
import { AProps, StyledA } from './Link.style'

export const Link = ({
  fontSize,
  children,
  ...props
}: React.PropsWithChildren<LinkProps> & AProps) => {
  return (
    <NextLink {...props} passHref={true}>
      <StyledA fontSize={fontSize}>{children}</StyledA>
    </NextLink>
  )
}
