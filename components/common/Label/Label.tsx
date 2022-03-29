import { MarginProps } from 'components/common/styleUtils'
import { PropsWithChildren } from 'react'
import { StyledLabel } from './Label.style'

export const Label = ({
  children,
  ...props
}: PropsWithChildren<MarginProps>) => {
  return <StyledLabel {...props}>{children}</StyledLabel>
}
