import { Grid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import Card from "../../components/Card";
import { fetchProductList } from "../../api";
import React from "react";

    function Products() {
        const {data, error,isLoading} = useQuery("products", fetchProductList);

        if (isLoading) return "Loading...";

        if (error) return "An error has occurred: " + error.message;

        console.log(data);

    return(
        <div>
            <Card/>
            <Grid>
                <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                    <Card/>
                    <Card/>
                    <Card/>
                </Grid>
            </Grid>
        </div>
    )

}
export default Products;