import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { Footer } from '../components/common/Footer/Footer'
import { NavBar } from '../components/common/NavBar/NavBar'
import { GlobalStyle } from '../components/common/Theme'

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? (
    <>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  ) : (
    <>No found</>
  )
}
