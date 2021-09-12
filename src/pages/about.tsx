import { getSession } from 'next-auth/client'
import React from 'react';
import { Header } from '../components/Header';

export default function About( {session} ) {

    return (
        <Header />
    );
  }
  
  export async function getServerSideProps({req}) {
    const session = await getSession({req});

    console.log(session)
    
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