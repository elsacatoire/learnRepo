'use client'

import { Input, Text, Button, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import React from 'react'





const Editor = () => {
    /* const handleNameChange = (event: any) => {
        const newName = event.target.value;
        store.dispatch(updateName(newName))
        console.log("newName = " + newName);

        console.log(store.getState());


        const state = store.getState()
        console.log("state = " + state);
        console.log(".title = " + state.title.payload);
        console.log(".description = " + state.descirption);





    }; */
    return (
        <div>
            <Card>
                <CardBody>
                    <Text fontSize='xl'>Customize your notification</Text>
                    <Input placeholder='App Name' /* onChange={handleNameChange} */ />
                </CardBody>
                <CardBody>
                    <Text>
                        app name : { }
                    </Text>
                </CardBody>
            </Card>
        </div>
    )
}

export default Editor