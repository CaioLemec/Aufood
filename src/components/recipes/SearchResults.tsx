import { ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>
}

export function SearchResults({ results }: SearchResultsProps) {
    return (
        <UnorderedList>
            {results.map(product => {
                return (
                    <ListItem>
                        <ProductItem product={product} />
                    </ListItem>

                );
            })}
        </UnorderedList>
    );
}