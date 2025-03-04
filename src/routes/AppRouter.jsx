import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth"

export const AppRouter = () => {

  return (
    <Routes>
          <Route path="/auth/*" element={<AuthRoutes />} />
          {/* <Route path="/*" element={<AuthRoutes />} /> */}
          

          <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  )
}