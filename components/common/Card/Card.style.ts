import Image from 'next/image'
import styled, { css } from 'styled-components'

export type CardWrapperProps = {
  active?: boolean
}

const cardHover = css`
  box-shadow: 0px 0px 50px rgba(64, 64, 168, 0.4);
`

export const CardWrapper = styled.div<CardWrapperProps>`
  height: 27rem;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 0px 0px 50px rgba(64, 64, 168, 0.15);
  &:hover {
    ${cardHover}
  }
  ${({ active }) =>
    active ? 'box-shadow: 0px 0px 50px rgba(64, 64, 168, 0.8);' : ''}
`

export const TextWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 4;
`

export const CardImage = styled.div`
  z-index: 1;
  width: 100%;
  height: 50%;
  position: relative;
`

export const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: 0 5%;
  border-radius: 1rem 1rem 0 0;
`

export const CardFooter = styled.div`
  margin: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
