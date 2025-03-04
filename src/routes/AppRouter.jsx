import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth"
import { HeroRouter } from "../hero/routes"
import { useSelector } from "react-redux"

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)

  return (
    <Routes>

      {status === 'not-authenticated'
        ? <Route path="/auth/*" element={<AuthRoutes />} />
        : <Route path="/*" element={<HeroRouter />} />
      }

      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  )
}