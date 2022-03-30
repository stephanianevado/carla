import { Theme, ThemeColor } from 'components/common/Theme'
import styled from 'styled-components'

export type PProps = {
  color?: ThemeColor
}

export const P = styled.p<PProps>`
  color: ${({ color }) =>
    color ? Theme.colors[color] : Theme.colors.darkBlue};
  overflow-wrap: break-word;
  font-size: ${Theme.fontSize.medium};
  line-height: ${Theme.lineHeight.large};
  font-weight: 300;
  letter-spacing: 0.1rem;
`
