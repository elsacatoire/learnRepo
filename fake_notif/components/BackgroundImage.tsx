import React from 'react'
import { Image } from '@chakra-ui/react'
import { useAppContext } from '@/app/context'

type BackgroundImageProps = {
    src: string;
    alt: string;
};

const BackgroundImage = ({ src, alt }: BackgroundImageProps) => {
    const { title,
        description,
        image,
        background,
        updateContent,
        updateTitle,
        updateDescription,
        updateImage,
        updateBackground } = useAppContext();

    const handleBackgroundChange = () => {
        // Update the background image in the context
        updateBackground(src);
    };

    return (
        <Image
            borderRadius='md'
            boxSize='50px'
            objectFit='cover'
            src={src}
            alt={alt}
            onClick={handleBackgroundChange}
        />
    )
}

export default BackgroundImage