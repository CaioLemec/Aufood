import { Flex, Text } from '@chakra-ui/react'
import React from 'react';

export function Descriptions() {
    return (
        <Flex alignItems="center" justifyContent="center">
            <Text textDecor="underline" color="gray.medium" mt="4">#whey</Text>
            <Text textDecor="underline" color="gray.medium" mt="4" ml="8">#veggie</Text>
            <Text textDecor="underline" color="gray.medium" mt="4" ml="8">#catpanese</Text>
            <Text textDecor="underline" color="gray.medium" mt="4" ml="8">#organic</Text>
            <Text textDecor="underline" color="gray.medium" mt="4" ml="8">#fit</Text>
        </Flex>
    );
}




