import { Link, Image } from '@chakra-ui/react'

export function Logotype( {sizing} ) {
    return (
        <Link href="/" style={{ textDecoration: 'none' }}>
            <Image src="images/Logotype.png" alt="Aufood logotype" maxW={sizing} />
        </Link>
    );
}