import { Theme } from 'components/common/Theme'
import styled from 'styled-components'

export type AProps = {
  fontSize?: string
}

export const StyledA = styled.a<AProps>`
  font-size: ${(props) => props.fontSize || Theme.fontSize.normal};
  cursor: pointer;
  text-decoration: underline ${Theme.colors.blue} 0.2rem;
`
