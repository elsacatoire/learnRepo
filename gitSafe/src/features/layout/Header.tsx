import { Button } from '@/components/ui/button'
import React from 'react'

export const Header = async () => {
    return (
        <header className='border-b border-b-accent'>
            <div className='container flex flex-item-center py-2 max-w-lg m-auto gap-1'>
                <h2 className='text-2xl font-bold mr-auto'>GitSafe</h2>
                <Button>demo</Button>
            </div>
        </header>
    )
}
