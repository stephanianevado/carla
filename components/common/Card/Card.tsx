import NextLink from 'next/link'
import { Div } from '../Container/Container'
import {
  CardFooter,
  CardImage,
  CardWrapper,
  CardWrapperProps,
  StyledImage,
  TextWrapper,
} from './Card.style'

type CardProps = {
  image: string
  title: string
  description: string
  href?: string
  footer: React.ReactNode
} & CardWrapperProps

export const Card = ({
  href,
  image,
  title,
  description,
  footer,
  active,
}: CardProps) => {
  const renderCardBody = () => (
    <>
      <CardImage>
        <StyledImage src={image} layout="fill" objectFit="cover"></StyledImage>
      </CardImage>
      <Div p="1">
        <TextWrapper>
          <h3>{title}</h3>
          <p>{description}</p>
        </TextWrapper>
      </Div>
    </>
  )
  return (
    <CardWrapper active={active}>
      {href ? (
        <NextLink href={href}>
          <a>{renderCardBody()}</a>
        </NextLink>
      ) : (
        renderCardBody()
      )}

      <CardFooter>{footer}</CardFooter>
    </CardWrapper>
  )
}
