import { Box, Image, Badge, Button } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';
import React from "react";
import router from "next/dist/client/router";

interface ProductItemProps {
    product: {
        id: number;
        imageUrl: string;
        imageAlt: string;
        runTime: string;
        title: string;
        rating: number;
        type: string;
        reviewCount: number;
    }
}

export function ProductItem({ product }: ProductItemProps) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.imageUrl} alt={product.imageAlt} />
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" bg="red.primary" color="white">
                        New
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        &bull; {product.reviewCount} reviews
                    </Box>
                </Box>
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {product.title}
                </Box>
                <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < product.rating ? "red.primary" : "gray.300"}
                            />
                        ))}
                </Box>
                <Button
                    onClick={() => router.push(`/recipes/${product.id}`)}
                    fontSize="15"
                    size="sm"
                    mt="4"
                    bg="red.primary"
                    color="white"
                    _hover={{ bg: "gray.dark" }}
                    _active={{
                        transform: "scale(0.90)",
                    }}
                    _focus={{
                        border: "none",
                    }}
                >
                    Details
                </Button>
            </Box>
        </Box>
    )
}