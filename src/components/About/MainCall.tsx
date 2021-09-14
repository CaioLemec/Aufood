import { Flex, Text, Box, Image, Button, Icon } from '@chakra-ui/react'
import router from 'next/dist/client/router';
import React from 'react';
import { TypeWritter } from './TypeWritter';
import { IoIosArrowForward } from 'react-icons/io'

export function MainCall() {
    return (
        <Flex zIndex="-1" mt="10" justifyContent="center" alignItems="center" w="100%" bg="red.primary">

            <Flex maxW={1440} w="100%">

                <Flex px="8" w="100%" flexDir="column" h={500} alignItems="center" justifyContent="center">
                    <Text as="strong" color="gray.light" textAlign="center" fontSize={["24px", "42px"]}>The best recipes for your...</Text>
                    <Text as="strong" color="gray.light" textAlign="center" fontSize={["24px", "42px"]}><TypeWritter /></Text>
                    <Button
                        onClick={() => router.push(`/recipes`)}
                        zIndex="1"
                        fontSize="15"
                        mt="8"
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
                </Flex>

                <Flex w="100%" h={500} alignItems="center" justifyContent="center">
                <Image zIndex="-1" position="relative" src="./images/mainAbout.png" alt="funny dog with sun glasses" />
                </Flex>

            </Flex>

        </Flex>
    );
}






