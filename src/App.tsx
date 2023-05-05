// https://jsonplaceholder.typicode.com/posts/

import { usePost } from "./hooks/use-post"

function App() {
  const {data, isLoading } = usePost(1)

  // render entire object
  return <div>{isLoading ? 'Content is Loading':JSON.stringify(data)}</div>
}

export default App
