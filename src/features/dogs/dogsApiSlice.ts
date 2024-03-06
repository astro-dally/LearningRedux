import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DOG_API_KEY ="https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple";

interface Breed {
    id: string;
    name:string
    image:{
        url: string
    }
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://opentdb.com/api_config.php',
        prepareHeaders(headers){
            headers.set('x-api-key',DOG_API_KEY);
            return headers;

        }
    }),
    endpoints(builder){
        return{
            fetchBreeds:builder.query<Breed[], number|void> ({
                query(limit=10){
                    return `/breeds?limit=${limit}`;
                }
            })
        }
    }
});

export const { useFetchBreedsQuery} = apiSlice;