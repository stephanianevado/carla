import { Theme, ThemeFontSize } from 'components/common/Theme'
import styled from 'styled-components'

export type AProps = {
  fontSize?: ThemeFontSize
}

export const StyledA = styled.a<AProps>`
  font-size: ${({ fontSize }) =>
    fontSize ? Theme.fontSize[fontSize] : Theme.fontSize.normal};
  cursor: pointer;
  text-decoration: underline ${Theme.colors.blue} 0.2rem;
`
