import { Box, SimpleGrid, Text, Button, Spacer, Icon, Image } from '@chakra-ui/react'
import router from 'next/dist/client/router';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io'

export function AboutCard() {
    return (
        <SimpleGrid mt="8" minChildWidth="400px" spacing="40px" pl="10" pr="10">

            <Box
                display="flex"
                flexDirection="column"
                bg="red.primary"
                height="200px"
                borderRadius="25"
                position="relative"
            >
                <Text ml="8" mt="8" fontSize="28" color="white" fontWeight="bold">About Us</Text>
                <Spacer />
                <Button
                onClick={() => router.push(`/about`)}
                zIndex="1"
                fontSize="15"
                ml="8"
                w="40"
                mb="4"
                bg="#cc1825"
                color="white"
                _hover={{ transform: "scale(0.90)" }}
                _active={{
                    transform: "scale(0.90)",
                }}
                _focus={{
                    border: "none",
                }}
            >
                More Details   <Icon as={IoIosArrowForward} fontSize="16" ml="2" color="purple.primary" />
            </Button>
            <Image position="absolute" right="0" src="./images/About.png" alt="cute cat and dog" />
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                bg="green.primary"
                height="200px"
                borderRadius="25"
                position="relative"
            >
                <Text ml="8" mt="8" fontSize="28" color="white" fontWeight="bold">Contact Us</Text>
                <Spacer />
                <Button
                onClick={() => router.push(`/contact`)}
                zIndex="1"
                fontSize="15"
                ml="8"
                w="40"
                mb="4"
                bg="#9EB53E"
                color="white"
                _hover={{ transform: "scale(0.90)" }}
                _active={{
                    transform: "scale(0.90)",
                }}
                _focus={{
                    border: "none",
                }}
            >
                More Details   <Icon as={IoIosArrowForward} fontSize="16" ml="2" color="purple.primary" />
            </Button>
            <Image position="absolute" right="0" src="./images/Contact.png" alt="cute cat and dog" />
            </Box>

        </SimpleGrid>
    );
}


