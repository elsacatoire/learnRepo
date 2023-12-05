'use client'

import React from 'react'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProvider } from './context';
import Header from '@/components/Header';

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
            <Header />
            {children}
          </ChakraProvider>
        </AppProvider>
      </body>
    </html>
  )
}
