'use client'

import React from 'react'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProvider } from './context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <AppProvider>
            {<Header />}
            {children}
            {<Footer />}
          </AppProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}
