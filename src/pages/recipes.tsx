import { getSession } from 'next-auth/client'
import { Input, Button, Flex, Stack, InputGroup, Spacer } from "@chakra-ui/react"
import React, { useState } from "react";
import { FormEvent } from 'toasted-notes/node_modules/@types/react';
import { Header } from '../components/Header';
import { SearchResults } from '../components/Recipes/SearchResults';
import { MainText } from '../components/Recipes/MainText';
import { AboutCard } from '../components/Recipes/AboutCard';
import { Footer } from '../components/Footer';
import { Descriptions } from '../components/Recipes/Descriptions';
import JustBg from '../components/Recipes/JustBg';
import Head from 'next/head';

export default function Recipes() {
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
            <Head>
                <title>Aufood | Recipes</title>
            </Head>
            <Flex mx="auto" w="100%" minHeight="100vh" maxW={1440} flexDirection="column">
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
                                            _focus={{
                                                border: "2px",
                                                borderColor: "red.primary",
                                            }}
                                            _hover={{
                                                border: "2px",
                                                borderColor: "red.primary",
                                            }}
                                            placeholder="best recipes"
                                            borderRightRadius="0"
                                            type="text"
                                            border="1px"
                                            borderColor="red.primary"
                                            color="gray.medium"
                                            fontWeight="bold"
                                            value={recipeSearch}
                                            onChange={e => setRecipeSearch(e.target.value)}
                                        />
                                        <Button
                                            bg="red.primary"
                                            color="white"
                                            _hover={{ bg: "#cc1825" }}
                                            borderLeftRadius="0"
                                            _focus={{ border: "none" }}
                                            onClick={handleSearch}
                                        >Search</Button>
                                    </InputGroup>
                                    <Descriptions />
                                </Stack>
                            </Flex>
                        </form>
                    </Flex>
                </Flex>
                {recipeResults.length >= 1 ? (
                    <SearchResults results={recipeResults} />
                ) : (
                    <>
                        <AboutCard />
                    </>
                )}
                <Spacer />
                <Footer />
            </Flex>
        </>
    );
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
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