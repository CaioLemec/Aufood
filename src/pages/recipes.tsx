import { getSession } from 'next-auth/client'
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
import React, { useState } from "react";
import { FormEvent } from 'toasted-notes/node_modules/@types/react';
import { SearchResults } from '../components/recipes/SearchResults';

export default function Recipes( {session} ) {
    const [recipeSearch, setRecipeSearch] = useState('');
    const [recipeResults, setRecipeResults] = useState([]);

    async function handleSearch(event: FormEvent) {
        event.preventDefault();
        if (!recipeSearch.trim()) {
            return;
        }
        const response = await fetch(`http://localhost:3001/products?q=${recipeSearch}`)
        const data = await response.json();

        setRecipeResults(data);
    }

    return (
        <>
        <form onSubmit={handleSearch}>
        <Input                     
            type="text" 
            value={recipeSearch} 
            onChange={e => setRecipeSearch(e.target.value)}  
        />
        <Button type="submit">Search</Button>
        </form>
        <SearchResults results={recipeResults} />
        </>
    );
  }
  
  export async function getServerSideProps({req}) {
    const session = await getSession({req});

    console.log(session)
    
    if(!session) {
        return {
            redirect: {
                destination: '/api/auth/signin',
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