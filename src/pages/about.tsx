import { Flex, Spacer, Image, Text, Box } from '@chakra-ui/react';
import { getSession } from 'next-auth/client'
import React from 'react';
import { MainCall } from '../components/About/MainCall';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { JustBg } from '../components/Recipes/JustBg';

export default function About( {session} ) {

    return (
        <>
            <Flex margin="0 auto" w="100%" minHeight="100vh" flexDirection="column">
                <JustBg />
                <Header />
                <MainCall />
            </Flex>
            <Spacer />
            <Footer />
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