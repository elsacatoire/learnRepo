import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react"

const Header = () => {
    return (
        <>
            <Flex p="2rm" direction="column" alignItems="center">
                <Heading as="h1" size="4xl" noOfLines={1} className="tasklist-title">
                    Tasklist.io
                </Heading>
                <Text mt="1rem" className="tasklist-slogan">
                    Tasklist est un outil open-soucre qui simplifie votre quotidien
                </Text>
            </Flex>
        </>
    )
}

export default Header