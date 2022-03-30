import { Theme } from 'components/common/Theme'
import styled from 'styled-components'

export const FOOTER_HEIGHT = 10

export const Container = styled.footer`
  position: absolute;
  width: 100%;
  margin: auto;
  margin-top: 10rem;
  background: ${Theme.colors.black};
`

export const A = styled.a`
  color: ${Theme.colors.white};
  margin: 0.625rem;
`

export const Contact = styled.div`
  height: ${FOOTER_HEIGHT}rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
