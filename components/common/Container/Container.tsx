import {
  MarginProps,
  PaddingProps,
  styledMargins,
  styledPadding,
} from 'components/common/styleUtils'
import styled from 'styled-components'

export type ContainerProps = {
  align?: 'flex-end' | 'flex-start'
  alignItems?: 'flex-end' | 'flex-start' | 'center' | 'space-around'
  justifyContent?: 'flex-end' | 'flex-start' | 'center' | 'space-around'
  direction?: 'row' | 'column'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
} & MarginProps &
  PaddingProps

export const Container = styled.div<ContainerProps>`
  ${styledMargins}
  ${styledPadding}
  display: flex;
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};
`

export const Div = styled.div<ContainerProps>`
  ${styledMargins}
  ${styledPadding}
  overflow-wrap: break-word;
`
