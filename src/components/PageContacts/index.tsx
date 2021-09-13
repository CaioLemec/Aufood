import { Flex, FormControl, FormLabel, Input, VStack, Textarea, Button, useToast } from "@chakra-ui/react"
import React from "react";

export function ContactInput() {
    const toast = useToast()
    return (
        <Flex>
            <VStack>
                <FormControl id="first-name">
                    <FormLabel color="gray.medium">First name</FormLabel>
                    <Input
                        placeholder="Name"
                        borderColor="red.primary"
                        _focus={{
                            border: "2px",
                            borderColor: "red.primary",
                        }}
                        _hover={{ transform: "scale(0.95)", }}
                    />
                </FormControl>
                <FormControl id="email">
                    <FormLabel color="gray.medium">Email address</FormLabel>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        borderColor="red.primary"
                        _focus={{
                            border: "2px",
                            borderColor: "red.primary",
                        }}
                        _hover={{ transform: "scale(0.95)", }}
                    />
                </FormControl>
                <FormControl id="content">
                    <FormLabel color="gray.medium">Menssage</FormLabel>
                    <Textarea
                        placeholder="We are waiting for your contact."
                        borderColor="red.primary"
                        mb="2"
                        resize="none"
                        _focus={{
                            border: "2px",
                            borderColor: "red.primary",
                        }}
                        _hover={{ transform: "scale(0.95)", }}
                    />
                </FormControl>
                <Button
                    onClick={() =>
                        toast({
                            title: "E-mail sent.",
                            description: "We will have an answer as soon as possible.",
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                    size="lg"
                    w="100%"
                    fontSize="16"
                    mr="5"
                    ml={["4", "2"]}
                    bg="red.primary"
                    color="white"
                    _hover={{ opacity: "0.8" }}
                    _active={{
                        transform: "scale(0.90)",
                    }}
                    _focus={{
                        border: "none",
                    }}
                >
                    Contact us
                </Button>
            </VStack>
        </Flex>
    );
}