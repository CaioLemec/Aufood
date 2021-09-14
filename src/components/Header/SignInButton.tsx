import { Button, Icon, Text, Avatar, Box } from '@chakra-ui/react'
import { RiGithubFill } from 'react-icons/ri'
import { signIn, signOut, useSession } from 'next-auth/client'

export function SignInButton() {
    const [session] = useSession();
    return session ?
        (
            <Button
                rightIcon={<Avatar size="md" name={session.user.name} src={session.user.image} />}
                fontSize="16"
                size="lg"
                bg="transparent"
                color="white"
                _hover={{ opacity: "0.8" }}
                onClick={() => signOut()}
            >
                <Box textAlign="right">
                    <Text color="red.primary" fontWeight="bold" fontSize="18" letterSpacing="wide">{session.user.name}</Text>
                    <Text fontWeight="light" color="red.primary" fontSize="14">{session.user.email}</Text>
                </Box>
            </Button>
        )
        :
        (
            <Button
                leftIcon={<Icon fontSize="48" color="white" as={RiGithubFill} />}
                fontSize="16"
                size="lg"
                bg="red.primary"
                color="white"
                _hover={{ opacity: "0.8" }}
                onClick={() => signIn('github')}
            >
                Sign in with Github
            </Button>
        )
}