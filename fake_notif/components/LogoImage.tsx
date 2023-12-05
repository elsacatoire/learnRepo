import React from 'react'

import { Image } from '@chakra-ui/react'

type LogoImageProps = {
    src: string;
    alt: string;
};
const LogoImage = ({ src, alt }: LogoImageProps) => {
    return (
        <Image
            p="2"
            boxSize='50px'
            objectFit='cover'
            src={src}
            alt={alt}
        />
    )
}

export default LogoImage