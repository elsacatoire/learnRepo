import React from 'react'
import { Link, Box } from '@chakra-ui/react'

const Footer = () => {
    return (

        <Box className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-teal-800 dark:border-teal-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/elsacatoire" className="hover:underline">Elsa Catoire</a>. Home made with Next.js.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="https://portfolio-next-psi-ten.vercel.app/" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link href="https://github.com/elsacatoire/learnRepo/tree/main/fake_notif" className="hover:underline me-4 md:me-6">GitHub repo</Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/elsa-catoire-11402753/" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </Box>
    )
}

export default Footer