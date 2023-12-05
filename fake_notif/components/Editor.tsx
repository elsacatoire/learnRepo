'use client'

import { Input, Text, Box, Card, CardHeader, CardBody, CardFooter, Heading, Textarea } from '@chakra-ui/react'
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
        <Card maxW="400px">
            <CardHeader >
                <Heading size='md'>Customize your notification</Heading>
                <Text>
                    With this tool you can create a fake notifictaions image and share it with your friends!
                </Text>
            </CardHeader>
            <Box p="3">
                <Text p="2" marginTop="2" fontWeight="bold">Application name</Text>
                <Input p="2" fontWeight="bold" placeholder={title} onChange={handleTitleChange} />
                <Text p="2" marginTop="2" fontWeight="bold">Notification text</Text>
                <Input p="2" h="10rem" placeholder={description} onChange={handleDescriptionChange} />
                <Text p="2" marginTop="2" fontWeight="bold">Logo image link</Text>
                <Input p="2" placeholder='link to your image' onChange={handleImageChange} />
            </Box>

        </Card>
    )
}

export default Editor