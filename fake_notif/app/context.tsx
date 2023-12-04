// Set the context of my file
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
    title: string;
    description: string;
    image: string;
    updateContent: (title: string, description: string, image: string) => void;
}

const defaultImage = "https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_640.png";

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>(defaultImage);

    const updateContent = (newTitle: string, newDescription: string, newImage: string) => {
        setTitle(newTitle);
        setDescription(newDescription);
        setImage(newImage);
    };

    const contextValue: AppContextProps = {
        title,
        description,
        image,
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
