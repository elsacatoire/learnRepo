// Set the context of my file
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
    title: string;
    description: string;
    image: string;
    background: string;
    updateContent: (title: string, description: string, image: string, background: string) => void;
}

const defaultImage = "https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_640.png";
const defaultBackground = "https://img.freepik.com/photos-premium/fond-ecran-iphone-est-meilleur-fond-ecran-haute-definition-pour-iphone-vous-pouvez-creer-fond-ecran-pour-vos-arriere-plans-iphone-x-votre-economiseur-ecran-mobile-votre-ecran-verrouillage-ipad-iphone-iphone-6-plus-mur_900321-19761.jpg"

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [title, setTitle] = useState<string>('WhatsApp');
    const [description, setDescription] = useState<string>('You recieved money from 6666 it is way fun you are rich');
    const [image, setImage] = useState<string>(defaultImage);
    const [background, setBackground] = useState<string>(defaultBackground);

    const updateContent = (newTitle: string, newDescription: string, newImage: string, newBg: string) => {
        setTitle(newTitle);
        setDescription(newDescription);
        setImage(newImage);
        setBackground(newBg);
    };

    const contextValue: AppContextProps = {
        title,
        description,
        image,
        background,
        updateContent,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
