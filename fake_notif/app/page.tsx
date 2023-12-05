import { Flex, Box } from '@chakra-ui/react'
import Preview from '@/components/Preview'
import Editor from '@/components/Editor'


export default function Home() {


  return (
    <>
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center">
        <Box width="30%">
          <Editor />
        </Box>
        <Box width="50%">
          <Preview />
        </Box>
      </Flex>
    </>
  )
}
