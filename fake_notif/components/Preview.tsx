'use client'

import { Text, Box, Image, Card, CardHeader, CardBody, Flex } from '@chakra-ui/react'
import React from 'react'
import { useAppContext } from '@/app/context'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryHalf, faWifi } from "@fortawesome/free-solid-svg-icons";


const Preview = ({ }) => {
    const { title, description, image, updateContent } = useAppContext();

    return (
        <Card
            maxW='320px'
            minW="300px"
            minH="600px"
            maxH="800px"
            backgroundImage="https://img.freepik.com/photos-premium/fond-ecran-iphone-est-meilleur-fond-ecran-haute-definition-pour-iphone-vous-pouvez-creer-fond-ecran-pour-vos-arriere-plans-iphone-x-votre-economiseur-ecran-mobile-votre-ecran-verrouillage-ipad-iphone-iphone-6-plus-mur_900321-19761.jpg"

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