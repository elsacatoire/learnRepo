import React from 'react'

import { Image } from '@chakra-ui/react'

type BackgroundImageProps = {
    src: string;
    alt: string;
};

const BackgroundImage = ({ src, alt }: BackgroundImageProps) => {

    function handleBgChange() {
        return src
    }

    return (
        <Image
            borderRadius='md'
            boxSize='50px'
            objectFit='cover'
            src={src}
            alt={alt}
            onClick={handleBgChange}
        />
    )
}

export default BackgroundImage