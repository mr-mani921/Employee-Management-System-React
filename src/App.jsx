import React, { useEffect } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashBoard/EmployeeDashboard'
import AdminDashboard from './components/dashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  },)
  
  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
