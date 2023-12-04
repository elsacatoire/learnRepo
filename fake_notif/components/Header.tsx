import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react"

const Header = () => {
    return (
        <>
            <Flex p="2rem" direction="column" alignItems="center">
                <Heading as='h1' size='2xl'>
                    Fake Notif
                </Heading>
            </Flex>
        </>
    )
}

export default Header