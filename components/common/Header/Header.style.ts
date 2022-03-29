import { MarginProps, styledMargins } from 'components/common/styleUtils'
import { Theme } from 'components/common/Theme'
import styled, { css } from 'styled-components'

export type HeaderProps = {
  color?: string
  align?: string
  fontSize?: string
} & MarginProps

const styledHeader = css<HeaderProps>`
  ${(props) => (props.align ? `text-align: ${props.align}` : '')};
  letter-spacing: 0.1rem;
  line-height: 3rem;
  margin: 0;
  padding: 0;
  ${styledMargins}
`

export const StyledTitle = styled.h1<HeaderProps>`
  ${styledHeader}
  text-align: center;
  color: ${(props) => props.color || Theme.colors.blue};
  font-size: ${(props) => props.fontSize || Theme.fontSize.xlarge};
  font-weight: ${Theme.fontWeight.bold};
`

export const StyledH2 = styled.h2<HeaderProps>`
  ${styledHeader}
  color: ${(props) => props.color || Theme.colors.cornBlue};
  margin-top: 2rem;
  font-weight: ${Theme.fontWeight.normal};
  ${Theme.breakpoints.laptop} {
    font-size: ${(props) => props.fontSize || Theme.fontSize.large};
  }
`

export const StyledH3 = styled.h3<HeaderProps>`
  ${styledHeader}
  color: ${(props) => props.color || Theme.colors.cornBlue};
  font-size: ${(props) => props.fontSize || Theme.fontSize.medium};
  margin-top: 2rem;
  font-weight: ${Theme.fontWeight.normal};
`
