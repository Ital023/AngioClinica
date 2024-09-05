import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>}>
          <Route index element={<HomeBody/>} />
          <Route path="home" element={<HomeBody/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


