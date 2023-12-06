'use client'

import { Input, Text, Box, Card, CardHeader, Image, Heading, Flex } from '@chakra-ui/react'
import React from 'react'
import { useAppContext } from '@/app/context'
import BackgroundImage from './BackgroundImage'
import LogoImage from './LogoImage'

const Editor = () => {

    const backgroundData = [
        "/images/screen_bg/automn.jpg",
        "/images/screen_bg/binaire.jpg",
        "/images/screen_bg/pride.avif",
        "/images/screen_bg/red.jpg",
        "/images/screen_bg/rocks.jpg",
        "/images/screen_bg/sandy.jpg"
    ]

    const logoData = [
        "/images/instagram.webp",
        "/images/facebook.png",
        "/images/whatsapp.webp",
        "/images/spotify.png",
        "/images/slack.png"
    ]

    const { title,
        description,
        image,
        background,
        updateContent,
        updateTitle,
        updateDescription,
        updateImage,
        updateBackground } = useAppContext();

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        updateTitle(newTitle);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDescription = e.target.value;
        updateDescription(newDescription);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newImage = e.target.value;
        updateImage(newImage);
    };


    return (
        <Card
            maxW={{ base: '90%', md: '400px' }} // Responsive card width
            minH='600px'
            marginX="auto" // Center the card horizontally
        >
            <CardHeader >
                <Heading size='md'>Customize your notification</Heading>
                <Text>
                    With this tool you can create a fake notifictaion image and share it with your friends!
                </Text>
            </CardHeader>
            <Box p={{ base: 3, md: 6 }}> {/* Responsive padding */}
                <Text p="2" marginTop="2" fontWeight="bold">Background image</Text>
                <Flex justifyContent="space-between" flexWrap="wrap">
                    {backgroundData.map((src, index) => (
                        <BackgroundImage key={index} src={src} alt="test" />
                    ))}
                </Flex>
                <Text p="2" marginTop="2" fontWeight="bold">Application name</Text>
                <Input p="2" fontWeight="bold" placeholder={title} onChange={handleTitleChange} />
                <Text p="2" marginTop="2" fontWeight="bold">Logo</Text>
                <Flex flexWrap="wrap">
                    {logoData.map((src, index) => (
                        <LogoImage key={index} src={src} alt="test" />
                    ))}
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