import { css } from 'styled-components'

export type MarginProps = {
  m?: string
  ml?: string
  mr?: string
  mb?: string
  mt?: string
  mx?: string
  my?: string
}

export type PaddingProps = {
  p?: string
  pl?: string
  pr?: string
  pb?: string
  pt?: string
  py?: string
  px?: string
}

export const styledMargins = css<MarginProps>`
  && {
    margin: ${(props) => (props.m ? `${props.m}rem` : '')};
    margin-left: ${(props) => (props.ml ? `${props.ml}rem` : '')};
    margin-left: ${(props) => (props.mx ? `${props.mx}rem` : '')};
    margin-right: ${(props) => (props.mr ? ` ${props.mr}rem` : '')};
    margin-left: ${(props) => (props.mx ? ` ${props.mx}rem` : '')};
    margin-bottom: ${(props) => (props.mb ? ` ${props.mb}rem` : '')};
    margin-bottom: ${(props) => (props.my ? ` ${props.my}rem` : '')};
    margin-top: ${(props) => (props.mt ? ` ${props.mt}rem` : '')};
    margin-top: ${(props) => (props.my ? ` ${props.my}rem` : '')};
  }
`

export const styledPadding = css<PaddingProps>`
  && {
    padding: ${(props) => (props.p ? `${props.p}rem` : '')};
    padding-left: ${(props) => (props.px ? `${props.px}rem` : '')};
    padding-left: ${(props) => (props.pl ? `${props.pl}rem` : '')};
    padding-right: ${(props) => (props.px ? `${props.px}rem` : '')};
    padding-right: ${(props) => (props.pr ? `${props.pr}rem` : '')};
    padding-bottom: ${(props) => (props.py ? `${props.py}rem` : '')};
    padding-bottom: ${(props) => (props.pb ? `${props.pb}rem` : '')};
    padding-top: ${(props) => (props.py ? `${props.py}rem` : '')};
    padding-top: ${(props) => (props.pt ? `${props.pt}rem` : '')};
  }
`
