import { Theme } from 'components/common/Theme'
import styled from 'styled-components'
import { ButtonProps } from './Button'

export const StyledButton = styled.button`
  font-size: ${Theme.fontSize.normal};
  font-weight: ${Theme.fontWeight.semiBold};
  cursor: pointer;
  padding: 1rem 2rem;
  color: ${(props: ButtonProps) => props.color || Theme.colors.white};
  background: ${(props: ButtonProps) => props.bgColor || Theme.colors.blue};
  border: 0.063rem solid ${Theme.colors.white};
  box-sizing: border-box;
  border-radius: 0.5rem;
  &:hover {
    background: ${(props: ButtonProps) => props.hover || Theme.colors.black};
  }
  &:disabled {
    opacity: 0.4;
  }
`
