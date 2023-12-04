'use client'

import React from 'react'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProvider } from './context';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </AppProvider>
      </body>
    </html>
  )
}
