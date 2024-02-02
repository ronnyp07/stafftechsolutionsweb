
import { ChakraBaseProvider } from '@chakra-ui/react'
import  Navbar  from '@/components/Navbar'

import type { Metadata } from 'next'
import { Grid, GridItem } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import  Footer  from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Telollevo UI',
  description: 'La mejor app the mensajeria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ChakraBaseProvider>
       <Navbar />
        {children}
        <Footer />
        </ChakraBaseProvider>
      </body>
    </html>
  )
}
