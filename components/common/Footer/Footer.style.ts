import { Theme } from 'components/common/Theme'
import styled from 'styled-components'

export const Container = styled.footer`
  margin-top: auto;
  width: 100%;
  min-height: 3.125rem;
  background: ${Theme.colors.black};
`

export const A = styled.a`
  color: ${Theme.colors.white};
  margin: 0.625rem;
  letter-spacing: 0.2em;
  font-size: 2rem;
`

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`
