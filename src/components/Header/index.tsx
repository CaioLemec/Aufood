import { Flex, Spacer, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Logotype } from "./Logotype";
import { Menu } from "./Menu";
import { MobileMenu } from "./MobileMenu";
import { SignInButton } from "./SignInButton";

export function Header() {
    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })
    return (
        <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
            <Logotype sizing="150" />
            <Spacer />
            <Menu />
            <MobileMenu showMobileMenu={isMobileVersion} />
        </Flex>
    );
}

