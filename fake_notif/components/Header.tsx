import { Flex, Heading, Image } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <>
            <nav className="bg-white dark:bg-teal-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-tale-600">
                <Flex alignItems="center" color="white" p="5" direction="row-reverse">
                    <Heading marginLeft="1" >
                        Fake Notification
                    </Heading>
                    <FontAwesomeIcon icon={faMobileScreen} style={{ fontSize: "30px" }} />
                </Flex>
            </nav>
        </>
    )
}

export default Header