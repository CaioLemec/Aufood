import { Flex, Text } from '@chakra-ui/react'
import React from 'react';

export function MainText() {
    return (
        <Flex flexDirection="column" alignSelf="center" mb="5">
            <Text as="strong" color="gray.dark" textAlign="center" fontSize="30">The best recipes for your Pet.</Text>
            <Text color="gray.medium" textAlign="center" fontSize="20">Everything you need is here.</Text>
        </Flex>
    );
}




