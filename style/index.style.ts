import { Theme } from 'components/common/Theme'
import styled from 'styled-components'

export const HomeCardWrapper = styled.div`
  width: 15rem;
  height: 5rem;
  margin: 1rem;
  padding: 2rem;
  background-color: ${Theme.colors.litePink};
  border: 0.1rem solid ${Theme.colors.litePink};
  border-radius: 1.25rem;
  transition: color 0.15s ease, border-color 0.15s ease;
  box-shadow: 0px 0px 50px rgba(64, 64, 168, 0.15);
  cursor: pointer;
  &:hover {
    background-color: ${Theme.colors.pink};
    border-color: ${Theme.colors.pink};
    box-shadow: 0px 0px 50px rgba(64, 64, 168, 0.4);
  }
  ${Theme.breakpoints.laptop} {
    width: 20rem;
  }
`
export const A = styled.a`
  font-size: ${Theme.fontSize.medium};
  font-weight: ${Theme.fontWeight.bold};
`
