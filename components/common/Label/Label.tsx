import { MarginProps, styledMargins } from 'components/common/styleUtils'
import { Theme } from 'components/common/Theme'
import styled from 'styled-components'

export const Label = styled.span<MarginProps>`
  padding: 0.5rem;
  border-radius: 0.75rem;
  background-color: ${Theme.colors.wildRose};
  color: ${Theme.colors.dandelion};
  font-weight: ${Theme.fontWeight.bold};
  font-size: ${Theme.fontSize.small};
  ${styledMargins}
`
