import { Input, Text, Button, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import React from 'react'


const Preview = () => {
    //const state = store.getState()

    return (
        <Card>
            <CardBody>
                <div>Preview</div>
                <Text> state {/* {state} */}</Text>
                <Text>text text notification</Text>
            </CardBody>
        </Card>
    );
}

export default Preview