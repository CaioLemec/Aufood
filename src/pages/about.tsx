import { Flex, Spacer } from '@chakra-ui/react';
import { getSession } from 'next-auth/client'
import React from 'react';
import { MainCall } from '../components/About/MainCall';
import Swiper from '../components/About/Swiper/Swiper';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import JustBg from '../components/Recipes/JustBg';

export default function About() {
    return (
        <>
            <Flex margin="0 auto" w="100%" minHeight="100%" flexDirection="column">
                <JustBg />
                <Header />
                <MainCall />
                <Swiper />
            </Flex>

            <Flex margin="0 auto" w="100%" minHeight="100vh" flexDirection="column">
            A
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