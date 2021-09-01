import react from 'react';
import { providers, signIn, getSession } from 'next-auth/client';
import { Button } from '@chakra-ui/react';

export default function SignIn( { providers } ) {
    return (
        <>
        <div>Welcome to our costume page</div>
        <div>{Object.values(providers)}</div>
        <Button onClick={()=> signIn(providers.id)}>SignIn</Button>
        </>
    )
}

SignIn.getInitialProps = async(context) => {
    const {req, res} = context;
    const session = await getSession({req});

    if(session && res && session.acessToken) {
        res.writeHead(302, {
            location: "/",
        });
        res.end()
        return;
    }
    return {
        session: undefined,
        providers: await providers(),
    }
}