import api from "./apiConfig"
import jwtDecode from "jwt-decode"

export const signUp = async (credentials) => {
  try {
    const res = await api.post("/sign-up", credentials)
    localStorage.setItem("token", res.data.token)
    let user = jwtDecode(res.data.token)
    return user;
  } catch (e) {
    throw e
  }
}

export const login = async (credentials) => {
  try {
    const res = await api.post("/login", credentials)
    localStorage.setItem("token", res.data.token)
    let user = jwtDecode(res.data.token)
    return user;
  } catch (e) {
    throw e
  }
}

export const verify = async () => {
  const token = localStorage.getItem("token")
  if (token) {
    const res = await api.get("/verify")
    return res.data
  } else { 
  return false
  }
}

export const signOut = () => {
  try {
    localStorage.removeItem("token")
    return true
  } catch(e) {
    throw e
  }
}