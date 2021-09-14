import { Flex, Spacer, Text, Icon } from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineGoogle, AiOutlineWhatsApp } from 'react-icons/ai'

export function Footer() {
    return (
        <>
            <Flex zIndex="-1" position="absolute" left="0" bottom="0" bg="gray.light" w="100%" h="20">
            </Flex>
            <Flex as="footer" minW="100%" maxW={1440} h="20" px="6">
                <Flex minW="100%" alignItems="center" justifyContent="center" mt="4">
                    <Text color="gray.dark" fontWeight="light">© Copyright 2021 - AuFood - Caio Lemec</Text>
                    <Spacer />
                    <a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=5521999999999&text=Hello, Caio! I Loved Aufood!">
                        <Icon _hover={{ opacity: "0.8" }} _active={{ transform: "scale(0.90)" }} as={AiOutlineWhatsApp} fontSize="30" ml="4" color="gray.dark" />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/CaioLemec">
                        <Icon _hover={{ opacity: "0.8" }} _active={{ transform: "scale(0.90)" }} as={AiOutlineGithub} fontSize="30" ml="4" color="gray.dark" />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/caiolemec/">
                        <Icon _hover={{ opacity: "0.8" }} _active={{ transform: "scale(0.90)" }} as={AiOutlineLinkedin} fontSize="30" ml="4" color="gray.dark" />
                    </a>
                </Flex>
            </Flex>
        </>
    );
}

