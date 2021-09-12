import { getSession } from 'next-auth/client'
import { Input, Button, Flex, Stack, InputGroup } from "@chakra-ui/react"
import React, { useState } from "react";
import { FormEvent } from 'toasted-notes/node_modules/@types/react';
import { Header } from '../components/Header';
import { SearchResults } from '../components/Recipes/SearchResults';
import { MainText } from '../components/Recipes/MainText';
import { JustBg } from '../components/Recipes/JustBg';
import { AboutCard } from '../components/Recipes/AboutCard';

export default function Recipes({ session }) {
    const [recipeSearch, setRecipeSearch] = useState('');
    const [recipeResults, setRecipeResults] = useState([]);

    async function handleSearch(event: FormEvent) {
        event.preventDefault();
        if (!recipeSearch.trim()) {
            return;
        }
        const response = await fetch(`http://localhost:3001/recipes?q=${recipeSearch}`)
        const data = await response.json();
        setRecipeResults(data);
    }

    return (
        <>
            <Flex margin="0 auto" w="100%" h="100%" maxW={1140} flexDirection="column">
                <JustBg />
                <Header />
                <Flex 
                justifyContent="center" 
                alignSelf="center" 
                flexDirection="column"
                w="100%"
                h="100%"
                mt={100}
                >
                    <MainText />
                    <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
                        <form onSubmit={handleSearch}>
                            <Flex w="100%" alignItems="center" justifyContent="center">
                                <Stack w={450}>
                                    <InputGroup>
                                        <Input
                                            borderRightRadius="0"
                                            type="text"
                                            value={recipeSearch}
                                            onChange={e => setRecipeSearch(e.target.value)}
                                        />
                                        <Button 
                                        bg="red.primary" 
                                        color="white" 
                                        _hover={{ bg: "gray.dark" }} 
                                        borderLeftRadius="0" 
                                        _focus={{border: "none"}}
                                        onClick={handleSearch}
                                        >Search</Button>
                                    </InputGroup>
                                </Stack>
                            </Flex>
                        </form>
                    </Flex>
                </Flex>
                {recipeResults.length >= 1 ? (
                    <SearchResults results={recipeResults} />
                ) : (
                    <AboutCard />
                )}

            </Flex>
        </>
    );
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });

    console.log(session)

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            session,
        }
    }
}