import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth"

export const AppRouter = () => {

  return (
    <Routes>
          <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  )
}