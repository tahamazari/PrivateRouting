import { Link } from "react-router-dom"

import { isLoggedIn } from "../utils"
import { Button } from "."

export const Navbar = () => {

  const { location: { pathname } } = window

  const onLogout = () => {
    localStorage.clear()
    window.location.href = "/login"
  }

  const routes = [
    ...(
      isLoggedIn() ? [
        {
          to: "/dashboard",
          label: 'Dashboard'
        },
        {
          to: "/profile",
          label: 'Profile'
        },
        {
          to: "/settings",
          label: 'Settings'
        }
      ] : 
      [
        {
          to: "/login",
          label: 'Login'
        }
      ]
    )
  ]

  return (
    <div className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {
                routes.map(({ to, label }, index) => {
                  return(
                    <Link 
                      key={index} 
                      to={to} 
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 ${pathname.includes(to) && 'border-b-2 border-indigo-500'}`}>
                      {label}
                    </Link>
                  )
                })
              }
            </div>
          </div>
          {
            isLoggedIn() &&
            <div className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
              <Button 
                label="Logout"
                onClick={onLogout}
              />
            </div> 
          }
        </div>
      </div>
    </div>
  )
}