import { Theme } from 'components/common/Theme'
import { MouseEventHandler, PropsWithChildren } from 'react'
import styled from 'styled-components'

export type ButtonProps = PropsWithChildren<{
  color?: string
  bgColor?: string
  hover?: string
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}>

export const Button = styled.button<ButtonProps>`
  font-size: ${Theme.fontSize.normal};
  font-weight: ${Theme.fontWeight.semiBold};
  cursor: pointer;
  padding: 1rem 2rem;
  color: ${(props) => props.color || Theme.colors.white};
  background: ${(props) => props.bgColor || Theme.colors.blue};
  border: 0.063rem solid ${Theme.colors.white};
  box-sizing: border-box;
  border-radius: 0.5rem;
  &:hover {
    background: ${(props) => props.hover || Theme.colors.cornBlue};
  }
  &:disabled {
    opacity: 0.4;
  }
`
