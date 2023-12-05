import { Flex, Heading } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <>
            <Flex color="white" p="10" direction="row-reverse" alignItems="center" bg="#40A497">
                <Heading p="0" as='h1' size='2xl'>
                    Fake Notification
                </Heading>
                <FontAwesomeIcon icon={faMobileScreen} style={{ color: "teal.500", }} />
            </Flex>
        </>
    )
}

export default Header