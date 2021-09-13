import { Flex, Spacer } from '@chakra-ui/react';
import { getSession } from 'next-auth/client'
import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { JustBg } from '../components/Recipes/JustBg';

export default function About( {session} ) {

    return (
        <>
            <Flex margin="0 auto" w="100%" minHeight="100vh" maxW={1440} flexDirection="column">
                <JustBg />
                <Header />
                <Spacer />
                <Footer />
            </Flex>
        </>
    );
  }
  
  export async function getServerSideProps({req}) {
    const session = await getSession({req});
    
    if(!session) {
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