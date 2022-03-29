import Head from 'next/head'
import React from 'react'
import { PageWrapper } from './Page.style'

export const Page: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>My cat breeds app</title>
        <meta name="description" content="An app about cat breeds." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <PageWrapper>{children}</PageWrapper>
    </>
  )
}
