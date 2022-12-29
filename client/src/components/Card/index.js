import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import React from "react"

function Card(){
    return(
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">

        <Link to="#/"></Link>
            <Image src="https://picsum.photos/200/300" alt="product" loading="lazy"></Image>

            <Box p="6">
                <Box d="plex" alignItems="baseline">
                    29/12/2022
            </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    Macbook Pro
                </Box>
                <Box>100tl</Box>

                <Button colorScheme="ping">Add to basket</Button>

        </Box>
    );
}
export default Card();