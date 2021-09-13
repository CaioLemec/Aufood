import { Flex, Spacer, useBreakpointValue, Image, useToast } from '@chakra-ui/react';
import { getSession } from 'next-auth/client'
import { Head } from 'next/document';
import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header'
import { ContactInput } from '../components/PageContacts';
import { JustBg } from '../components/Recipes/JustBg';



export default function Contact({ session }) {
    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
      })
      
    return (
        <>
        <Flex maxW={1440} m="0 auto" flexDirection="column" w="100%" h="100vh" align="center" justify="center">
        <JustBg />
        <Header />
        <Spacer />
          <Flex w="65%" h="65%" boxShadow="2xl" borderRadius={30} bg="rgba(255, 255, 255, 0.1)" >
            {!isMobileVersion && (
              <Flex w="100%" h="100%" alignItems="center">
                <Image maxH={200} src="images/cuteMainDog.png" alt="cute dog with aufood logotype" />
              </Flex>
            )}
            <Flex w="100%" h="100%" align="center" justify="center" mx="2">
              <ContactInput />
            </Flex>
          </Flex>
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