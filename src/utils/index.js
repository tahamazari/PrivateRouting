import { users } from "../data"

export const isLoggedIn = () => {
  return localStorage.getItem('userId') && users.find(user => user.id === parseInt(localStorage.getItem("userId")))
}

export const getCurrentUser = () => {
  return users.find(user => user.id === parseInt(localStorage.getItem('userId')))
}