import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound"; // Make sure this file exists

function App() {

  return (
    <>
    {/* Application routing */}
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
