import { Button, Icon, Text, Avatar } from '@chakra-ui/react'
import { RiGithubFill } from 'react-icons/ri'
import { signIn, signOut, useSession } from 'next-auth/client'

export function SignInButton() {
    const [session] = useSession();
    return session ?
        (
            <Button
                leftIcon={<Avatar size="md" name={session.user.name} src={session.user.image} />}
                fontSize="16"
                size="lg"
                bg="transparent"
                color="white"
                _hover={{ opacity: "0.8" }}
                onClick={() => signOut()}
            >
            <Text ml="1" color="gray.medium"><Text color="red.primary" as="span">Logged as </Text>{session.user.name}</Text>
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