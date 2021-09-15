import { Flex, Spacer } from '@chakra-ui/react';
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import React from 'react';
import { MainCall } from '../components/About/MainCall';
import { Carousel } from '../components/About/Swiper/Swiper';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import JustBg from '../components/Recipes/JustBg';

export default function About() {
    return (
        <>
            <Head>
                <title>Aufood | About</title>
            </Head>
            <Flex margin="0 auto" maxW={1440} w="100%" minHeight="100vh" flexDirection="column">
                <JustBg />
                <Header />
                <MainCall />
                <Carousel />
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