import './App.css'
import { Route, Routes } from 'react-router-dom'
import { adminRoutes, userRoutes, publicRoutes } from './routes/allRoutes'
import { AdminProtectedRoute, UserProtectedRoute } from './routes/middleware/ProtectedRoute'
import AdminLayout from './components/AdminLayout/index'
import AuthLayout from './components/UserLayout/index'
import GuestLayout from './components/GuestLayout/index'

function App() {

  return (
    <>
      <Routes>
        <Route path='/admin' element={<AdminProtectedRoute />}>
          <Route element={<AdminLayout />}>
            {adminRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.component} />
            ))}
          </Route>
        </Route>

        <Route path='/auth' element={<UserProtectedRoute />}>
          <Route element={<AuthLayout />}>
            {userRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.component} />
            ))}
          </Route>
        </Route>
        <Route element={<GuestLayout />}>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.component} />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default App
