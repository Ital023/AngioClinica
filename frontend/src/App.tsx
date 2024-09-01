import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./routes/Home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


