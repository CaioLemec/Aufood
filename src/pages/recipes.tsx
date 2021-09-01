import { getSession } from 'next-auth/client'

export default function Recipes( {session} ) {
    return (
        <h1>Olá</h1>
    );
  }
  
  export async function getServerSideProps({req}) {
    const session = await getSession({req});

    console.log(session)
    
    // if(!session) {
    //     return {
    //         redirect: {
    //             destination: '/api/auth/signin',
    //             permanent: false,
    //         }
    //     }
    // }
    
    return {
        props: {
            session,
        }
    }
  }