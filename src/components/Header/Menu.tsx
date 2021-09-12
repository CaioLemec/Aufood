import { Flex, HStack, Button } from "@chakra-ui/react"
import { ActiveLink } from "../ActiveLink";

export function Menu() {
    return (
        <Flex justifyContent="center">
            <HStack ml="8">
            <ActiveLink href="/recipes">
                    <Button
                        type="submit"
                        size="sm"
                        fontSize="15"
                        bg="transparent"
                        _hover={{ color: "red.primary" }}
                        _active={{
                            transform: "scale(0.90)",
                        }}
                        _focus={{
                            border: "none",
                        }}
                    >Recipes</Button>
                </ActiveLink>
                <ActiveLink href="/about">
                    <Button
                        type="submit"
                        size="sm"
                        fontSize="15"
                        bg="transparent"
                        _hover={{ color: "red.primary" }}
                        _active={{
                            transform: "scale(0.90)",
                        }}
                        _focus={{
                            border: "none",
                        }}
                    >About</Button>
                </ActiveLink>
                <ActiveLink href="/contact">
                    <Button
                        type="submit"
                        size="sm"
                        fontSize="15"
                        bg="transparent"
                        _hover={{ color: "red.primary" }}
                        _active={{
                            transform: "scale(0.90)",
                        }}
                        _focus={{
                            border: "none",
                        }}
                    >Contact</Button>
                </ActiveLink>
            </HStack>
        </Flex>
    );
}