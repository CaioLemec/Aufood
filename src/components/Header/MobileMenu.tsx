import { Icon, useMediaQuery, Button } from "@chakra-ui/react"
import React from "react";
import { FaSignOutAlt } from 'react-icons/fa'
import { SignInButton } from "./SignInButton";
import { signOut } from 'next-auth/client'

interface MobileMenuProps {
    showMobileMenu?: boolean;
}

export function MobileMenu({ showMobileMenu = true }: MobileMenuProps) {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
    if (isLargerThan768) {
        return (<SignInButton />)
    } else {
        return (
            <>
                {showMobileMenu && (
                    <Button
                    display="flex"
                    onClick={() => signOut()}
                    bg="transparent"
                    _hover={{ background: "0.8" }}
                    >
                        <Icon as={FaSignOutAlt} fontSize="20" color="red.primary" />
                    </Button>
                )}
            </>
        );
    }


}