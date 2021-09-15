import { Flex, Text, Image } from '@chakra-ui/react'
import React from 'react';
import { TypeWritter } from './TypeWritter';

export function MainCall() {
    return (
        <Flex zIndex="-1" mt="4" justifyContent="center" h={350} alignItems="center" w="100%" bg="red.primary">
            <Flex maxW={1440} w="100%" zIndex="1">
                <Flex px="8" w="100%" flexDir="column" maxH={500} alignItems="center" justifyContent="center">
                    <Text as="strong" color="gray.light" textAlign="center" fontSize={["24px", "42px"]}>The best recipes for your...</Text>
                    <Text as="strong" color="gray.light" textAlign="center" fontSize={["24px", "42px"]}><TypeWritter /></Text>
                </Flex>
                <Flex w="100%" h={500} alignItems="center" justifyContent="center">
                    <Image position="relative" src="./images/mainAbout.png" alt="funny dog with sun glasses" />
                </Flex>
            </Flex>
        </Flex>
    );
}