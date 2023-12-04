import { Flex } from '@chakra-ui/react'
import Preview from '@/components/Preview'
import Editor from '@/components/Editor'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Flex direction="row" minWidth='max-content' alignItems='center' gap='10' >
        <Editor />
        <Preview />
      </Flex>
    </>
  )
}
