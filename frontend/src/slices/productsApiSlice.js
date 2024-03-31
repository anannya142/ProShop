import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        //define your endpoints here
        getProducts: builder.query({
            query:()=>fetch(PRODUCTS_URL).then((response) => response.json()),
            keepUnusedDataFor : 5,
        })
    })
});
export const{ useGetProductsQuery } = productsApiSlice;