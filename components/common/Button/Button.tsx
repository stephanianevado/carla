import { Theme } from 'components/common/Theme'
import { PropsWithChildren } from 'react'
import { StyledButton } from './Button.style'

export type ButtonProps = PropsWithChildren<{
  color?: string
  bgColor?: string
  hover?: string
  disabled?: boolean
  onClick: () => void
}>

export const Button = ({
  color = Theme.colors.white,
  bgColor = Theme.colors.blue,
  hover = Theme.colors.deepBlue,
  disabled = false,
  onClick,
  children,
  ...props
}: ButtonProps) => (
  <StyledButton
    color={color}
    bgColor={bgColor}
    hover={hover}
    disabled={disabled}
    onClick={(e: any) => {
      e.preventDefault()
      if (onClick) {
        onClick()
      }
    }}
    {...props}
  >
    {children}
  </StyledButton>
)
