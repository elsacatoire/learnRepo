import React from 'react'
import { Image } from '@chakra-ui/react'
import { useAppContext } from '@/app/context'

type LogoImageProps = {
    src: string;
    alt: string;
};
const LogoImage = ({ src, alt }: LogoImageProps) => {
    const { title,
        description,
        image,
        background,
        updateContent,
        updateTitle,
        updateDescription,
        updateImage,
        updateBackground } = useAppContext();

    const handleLogoChange = () => {
        updateImage(src)
    }


    return (
        <Image
            p="2"
            boxSize='50px'
            objectFit='cover'
            src={src}
            alt={alt}
            onClick={handleLogoChange}
        />
    )
}

export default LogoImage