'use client'

import { Input, Text, Button, Image, Card, CardHeader, CardBody, CardFooter, Flex } from '@chakra-ui/react'
import React from 'react'
import { useAppContext } from '@/app/context'


const Preview = () => {
    const { title, description, image, updateContent } = useAppContext();

    return (
        <Card>
            <CardBody rounded="5%" height="10000px" width="350px" backgroundImage="https://img.freepik.com/photos-premium/fond-ecran-iphone-est-meilleur-fond-ecran-haute-definition-pour-iphone-vous-pouvez-creer-fond-ecran-pour-vos-arriere-plans-iphone-x-votre-economiseur-ecran-mobile-votre-ecran-verrouillage-ipad-iphone-iphone-6-plus-mur_900321-19761.jpg">
                <Card>
                    <CardHeader flex="row">
                        <Flex direction="row">
                            <Image
                                boxSize='50px'
                                objectFit='cover'
                                src={image}
                                alt='Dan Abramov'
                            />
                            <Text> {title} </Text>
                        </Flex>
                    </CardHeader>

                    <Text> {description} </Text>
                </Card>
            </CardBody>
        </Card>
    );
}

export default Preview