import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: number;
        imageUrl: string;
        imageAlt: string;
        runTime: string;
        title: string;
        rating: number;
        type: string;
        reviewCount: number;
    }>
}

export function SearchResults({ results }: SearchResultsProps) {
    return (
        <SimpleGrid p="10" minChildWidth="200px" spacing="40px">
            {results.map(product => {
                return (
                    <ProductItem key={product.id} product={product} />
                );
            })}
        </SimpleGrid>
    );
}