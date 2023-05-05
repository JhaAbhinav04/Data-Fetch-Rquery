import { useQuery } from "@tanstack/react-query"
import axios from "axios"

// Typescript essentials
interface Data {
  userId: number
  id: number
  title: string
  body: string
}

export const usePost = (postId: number) => {
    // return useQuery to avoid destructuring
    return useQuery({
        // query key for Caching
        // queryKey: ['myQuery', {myvar, myvar2}],
        
        queryFn: async () => {
            const { data } = await axios.get(
                'https://jsonplaceholder.typicode.com/posts/' + postId
            )
            return data as Data
        },
    })
};