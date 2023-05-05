// https://jsonplaceholder.typicode.com/posts/

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

// Typescript essentials
interface Data {
  userId: number
  id: number
  title: string
  body: string
}

function App() {
  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      // longer loading state
      await wait(2000)

      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      )
      return data as Data
    },
  })

  // render entire object
  return <div>{isLoading ? 'Content is Loading':JSON.stringify(data)}</div>
}

export default App
