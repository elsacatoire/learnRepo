'use client'

import { Text, Box, Image, Card, CardBody, Flex } from '@chakra-ui/react'
import React from 'react'
import { useAppContext } from '@/app/context'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryHalf, faWifi } from "@fortawesome/free-solid-svg-icons";

const Preview = ({ }) => {
    const { title, description, image, background, updateContent } = useAppContext();

    return (
        <Card
            maxW='320px'
            minW="300px"
            minH="600px"
            maxH="800px"
            backgroundImage={background}
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <Flex marginTop="4px" marginX="15px" backgroundColor="FFFFFF">
                <Box flex='1' alignContent="left">
                    <Text fontSize="small" color="white">Free</Text>
                </Box>
                <Box alignContent="right">
                    <FontAwesomeIcon icon={faWifi} style={{ color: "#ffffff", }} />
                    <FontAwesomeIcon icon={faBatteryHalf} style={{ color: "#ffffff", }} rotation={270} />
                </Box>
            </Flex>
            <CardBody
            >
                <Flex
                    rounded='0.375rem'
                    p="4"
                    bg="#ffffffD6"
                    maxW='280px'
                    minW="260px"
                >
                    <Image
                        p="2"
                        boxSize='50px'
                        objectFit='cover'
                        src={image}
                        alt='Whatsapp logo'
                    />
                    <Flex direction="column" justifyContent="center">
                        <Text fontWeight="bold"> {title} </Text>
                        <Text fontSize="small"> {description} </Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
}

export default Preview