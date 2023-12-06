import { Flex, Box } from '@chakra-ui/react'
import Preview from '@/components/Preview'
import Editor from '@/components/Editor'


export default function Home() {


  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-evenly">
        <Box margin="50px" >
          <Editor />
        </Box>
        <Box margin="50px">
          <Preview />
        </Box>
      </Flex>
    </>
  )
}
