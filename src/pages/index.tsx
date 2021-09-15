import { Flex, Image, Text, Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { Logotype } from '../components/Header/Logotype';
import { SignInButton } from '../components/Header/SignInButton';
import { getSession } from 'next-auth/client'
import Head from 'next/head';

export default function Home({ session }) {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  })
  return (
    <>
      <Head>
        <title>Aufood | Sign In</title>
      </Head>
      <Flex flexDirection="column" w="100vw" h="100vh" align="center" justify="center">
        <Flex w="100%" h="100%"></Flex>
        <Flex w="100%" h="100%" bg="white"></Flex>
        {!isMobileVersion && (
          <>
            <Flex zIndex="1" left="0" top="5" alignItems="center" justifyContent="center" position="absolute">
              <Image src="images/bird.svg" alt="bird on the branch" />
            </Flex>
            <Flex zIndex="1" right="0" bottom="0" alignItems="center" justifyContent="center" position="absolute">
              <Image src="images/chameleon.svg" alt="chameleon on the branch" />
            </Flex>
          </>
        )}
        <Flex alignItems="center" justifyContent="center" position="absolute" w="70%" h="70%" rounded="25" border="none" boxShadow="2xl">
          <Flex flexDir="column" alignItems="center" justifyContent="center" w="100%" h="100%">
            <Logotype sizing="350" />
            <Text color="gray.medium" fontWeight="bold" mt="4" fontSize="30">Find our best recipes</Text>
            <Box mt="4">
              <SignInButton />
            </Box>
          </Flex>
          {!isMobileVersion && (
            <Flex alignItems="center" justifyContent="center" w="100%" h="100%">
              <Image maxW={300} src="images/pet.svg" alt="dog and cat" />
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: '/recipes',
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