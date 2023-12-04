'use client'

import { Input, Text, Button, Card, CardHeader, CardBody, CardFooter, Heading, Textarea } from '@chakra-ui/react'
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
        <div>
            <Card>
                <CardBody>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>Customize your notification</Heading>
                        </CardHeader>
                        <Text fontSize='xl'></Text>
                        <Input placeholder='App Name' onChange={handleTitleChange} />
                        <Input h="10rem" placeholder="Text's notification" onChange={handleDescriptionChange} />
                        <Input placeholder='link to your image' onChange={handleImageChange} />
                    </Card>
                </CardBody>
            </Card >
        </div >
    )
}

export default Editor