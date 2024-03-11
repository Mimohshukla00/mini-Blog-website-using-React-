// import { useState } from 'react'
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"

function App() {
  // const [count, setCount] = useState(0)

  return (
  <div>

    <Header></Header>
    <Blogs></Blogs>
    <Pagination></Pagination>
  </div>
  )
}

export default App
