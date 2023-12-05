'use client'

import { Input, Text, Box, Card, CardHeader, Image, Heading, Flex } from '@chakra-ui/react'
import React from 'react'
import { useAppContext } from '@/app/context'


const Editor = () => {

    const { title, description, image, updateContent } = useAppContext();
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        updateContent(newTitle, description, image);
        console.log(newTitle);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDescription = e.target.value;
        updateContent(title, newDescription, image);
        console.log(description);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newImage = e.target.value;
        updateContent(title, description, newImage);
    };

    return (
        <Card
            maxW="400px"
            minH='600px'
        >
            <CardHeader >
                <Heading size='md'>Customize your notification</Heading>
                <Text>
                    With this tool you can create a fake notifictaions image and share it with your friends!
                </Text>
            </CardHeader>
            <Box p="3">
                <Text p="2" marginTop="2" fontWeight="bold">Background image</Text>
                <Flex justifyContent="space-between">
                    <Image
                        borderRadius='md'
                        boxSize='50px'
                        objectFit='cover'
                        src="/images/screen_bg/automn.jpg"
                        alt='Whatsapp logo'
                    />
                    <Image
                        borderRadius='md'
                        boxSize='50px'
                        objectFit='cover'
                        src="/images/screen_bg/binaire.jpg"
                        alt='Whatsapp logo'
                    />
                    <Image
                        borderRadius='md'
                        boxSize='50px'
                        objectFit='cover'
                        src="/images/screen_bg/pride.avif"
                        alt='Whatsapp logo'
                    />
                    <Image
                        borderRadius='md'
                        boxSize='50px'
                        objectFit='cover'
                        src="/images/screen_bg/red.jpg"
                        alt='Whatsapp logo'
                    />
                    <Image
                        borderRadius='md'
                        boxSize='50px'
                        objectFit='cover'
                        src="/images/screen_bg/rocks.jpg"
                        alt='Whatsapp logo'
                    />
                    <Image
                        borderRadius='md'
                        boxSize='50px'
                        objectFit='cover'
                        src="/images/screen_bg/sandy.jpg"
                        alt='Whatsapp logo'
                    />
                </Flex>
                <Text p="2" marginTop="2" fontWeight="bold">Application name</Text>
                <Input p="2" fontWeight="bold" placeholder={title} onChange={handleTitleChange} />
                <Text p="2" marginTop="2" fontWeight="bold">Logo</Text>
                <Flex>
                    <Image
                        p="2"
                        boxSize='50px'
                        objectFit='cover'
                        src="/images/instagram.webp"
                        alt='Whatsapp logo'
                    />
                    <Image
                        p="2"
                        boxSize='50px'
                        objectFit='cover'
                        src="/images/facebook.png"
                        alt='Whatsapp logo'
                    />
                    <Image
                        p="2"
                        boxSize='50px'
                        objectFit='cover'
                        src="/images/whatsapp.webp"
                        alt='Whatsapp logo'
                    />
                    <Image
                        p="2"
                        boxSize='50px'
                        objectFit='cover'
                        src="/images/spotify.png"
                        alt='Whatsapp logo'
                    />
                </Flex>
                <Text p="2" marginTop="2" fontWeight="bold">Notification text</Text>
                <Input p="2" h="4rem" placeholder={description} onChange={handleDescriptionChange} />
                <Text p="2" marginTop="2" fontWeight="bold">Logo image link</Text>
                <Input p="2" placeholder='link to your image' onChange={handleImageChange} />
            </Box>

        </Card>
    )
}

export default Editor