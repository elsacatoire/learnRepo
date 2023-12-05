'use client'

import { Text, Box, Image, Card, CardHeader, CardBody, Flex } from '@chakra-ui/react'
import React from 'react'
import { useAppContext } from '@/app/context'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryHalf, faWifi } from "@fortawesome/free-solid-svg-icons";


const Preview = () => {
    const { title, description, image, updateContent } = useAppContext();

    return (
        <Card
            maxW='320px'
            minW="300px"
            minH="600px"
            maxH="800px"
            backgroundImage="https://img.freepik.com/photos-premium/fond-ecran-iphone-est-meilleur-fond-ecran-haute-definition-pour-iphone-vous-pouvez-creer-fond-ecran-pour-vos-arriere-plans-iphone-x-votre-economiseur-ecran-mobile-votre-ecran-verrouillage-ipad-iphone-iphone-6-plus-mur_900321-19761.jpg" >
            <Flex marginTop="4px" marginX="15px">
                <Box flex='1' alignContent="left">
                    <Text fontSize="small" color="white">Free</Text>
                </Box>
                <Box alignContent="right">
                    <FontAwesomeIcon icon={faWifi} style={{ color: "#ffffff", }} />
                    <FontAwesomeIcon icon={faBatteryHalf} style={{ color: "#ffffff", }} rotation={270} />
                </Box>
            </Flex>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <CardBody maxW='300px' minW="280px" minH="200px" maxH="200px" rounded="5%" backgroundColor="#FFFFFF90" >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        height="60vh"
                    >
                        <Image
                            boxSize='25px'
                            objectFit='cover'
                            src={image}
                            alt='Dan Abramov'
                        />
                        <Text variant='ghost'> {title} </Text>
                        <Text> {description} </Text>
                    </Box>
                </CardBody>
            </Box>
        </Card>
    );
}

export default Preview