import { getSession } from 'next-auth/client'
import { Header } from '../components/Header'

export default function Contact( {session} ) {

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