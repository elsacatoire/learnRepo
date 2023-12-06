// Set the context of my file
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types for the data
interface AppContextProps {

    title: string;
    description: string;
    image: string;
    background: string;
    updateContent: (title: string, description: string, image: string, background: string) => void;
    updateTitle: (newTitle: string) => void;
    updateDescription: (newDescription: string) => void;
    updateImage: (newImage: string) => void;
    updateBackground: (newBackground: string) => void;
}

// Set up the default for Editor component
const defaultImage = "/images/instagram.webp";
const defaultBackground = "https://img.freepik.com/photos-premium/fond-ecran-iphone-est-meilleur-fond-ecran-haute-definition-pour-iphone-vous-pouvez-creer-fond-ecran-pour-vos-arriere-plans-iphone-x-votre-economiseur-ecran-mobile-votre-ecran-verrouillage-ipad-iphone-iphone-6-plus-mur_900321-19761.jpg"

// Create the context
const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

// AppProvider component that provides the context to its children
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    // State variables for dynamic data
    const [title, setTitle] = useState<string>('Instagram');
    const [description, setDescription] = useState<string>('Beyoncé is now following you!');
    const [image, setImage] = useState<string>(defaultImage);
    const [background, setBackground] = useState<string>(defaultBackground);

    // Method to rerender the dynamic data
    const updateContent = (newTitle: string, newDescription: string, newImage: string, newBg: string) => {
        setTitle(newTitle);
        setDescription(newDescription);
        setImage(newImage);
        setBackground(newBg);
    };

    const updateTitle = (newTitle: string) => {
        setTitle(newTitle);
    };

    const updateDescription = (newDescription: string) => {
        setDescription(newDescription);
    };

    const updateImage = (newImage: string) => {
        setImage(newImage);
    };

    const updateBackground = (newBackground: string) => {
        setBackground(newBackground);
    };

    // Context value containing dynamic data and update method
    const contextValue: AppContextProps = {
        title,
        description,
        image,
        background,
        updateContent,
        updateTitle,
        updateDescription,
        updateImage,
        updateBackground,
    }

    // Provide the context to the tree of components
    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Custom hook to conveniently access the context
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
