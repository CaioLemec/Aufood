import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Flex, Icon, Image } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { BiTimer } from 'react-icons/bi'
import React from "react";
import { api } from "../../services/api";
import router from "next/dist/client/router";

interface recipesResultProps {
    recipe: {
        id: number;
        imageUrl: string;
        imageAlt: string;
        runTime: string;
        title: string;
        rating: number;
        type: string;
        reviewCount: number;
        recipe: string;
    }
}

export default function Continent({ recipe }: recipesResultProps) {
    return (
        <Flex bg="gray.light" w="100vw" h="100%">
            <Flex flexDirection="column" maxW={1440} w="100%" h="100%" alignItems="center" justifyContent="center">
                <Box m="8" maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image mb="4" src={recipe.imageUrl} alt={recipe.imageAlt} />
                    <Box p="6">
                        <Box d="flex" alignItems="baseline" justifyContent="center">
                            <Badge borderRadius="full" px="2" bg="red.primary" color="white">
                                New
                            </Badge>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="8"
                            >
                                &bull; {recipe.reviewCount} reviews
                            </Box>
                            <Box d="flex" mt="2" ml="8" alignItems="center">
                                {Array(5)
                                    .fill("")
                                    .map((_, i) => (
                                        <StarIcon
                                            ml="4"
                                            key={i}
                                            color={i < recipe.rating ? "red.primary" : "gray.300"}
                                        />
                                    ))}
                            </Box>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="8"
                            >
                                <Icon mb="2" as={BiTimer} fontSize="20" color="purple.primary" /> &bull; {recipe.runTime}
                            </Box>
                        </Box>
                        <Box
                            mt="1"
                            fontWeight="bold"
                            lineHeight="tight"
                            isTruncated
                            fontSize="32"
                            marginTop="8"
                        >
                            {recipe.title}
                        </Box>
                        <Box
                            mt="1"
                            lineHeight="tight"
                            fontSize="24"
                            marginTop="8"
                        >
                            {recipe.recipe}
                        </Box>
                        <Button
                        onClick={() => router.push('/recipes')} 
                        fontSize="15"
                        size="lg"
                        mt="4"
                        bg="red.primary"
                        color="white"
                        _hover={{ bg: "gray.dark" }}
                        _active={{
                            transform: "scale(0.90)",
                        }}
                        _focus={{
                            border: "none",
                        }}
                    >
                        Back
                    </Button>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await api.get('/recipes');
    const recipes = response.data;

    const paths = recipes.map(recipe => (
        {
            params: { slug: recipe.id.toString() }
        }
    ))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;
    const response = await api.get(`/recipes/${slug}`);

    const recipe = response.data
    return {
        props: {
            recipe
        }
    }
}