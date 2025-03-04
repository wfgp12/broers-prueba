import { Navigate, Route, Routes } from "react-router-dom"
import { HeroList, HeroDetails } from "../pages"
import { Navbar } from "../components"

export const HeroRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/hero" element={<HeroList />} />
        <Route path="/hero/:id" element={<HeroDetails />} />

        <Route path="/*" element={<Navigate to="/hero" />} />
      </Routes>
    </>
  )
}
