import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [data, setData] = useState({})

    async function signIn({ email, password}){
        try {
            const response = await api.post("/sessions", {email, password})
            const { token, user} = response.data

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({ user, token })

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            localStorage.setItem("@rocketmovies:token", token)
        } catch (error) {
            if(error.response){
                return alert(error.response.data.message)
            }
            alert("Erro ao iniciar sessão.")
        }
    }

    function signOut(){
        localStorage.removeItem("@rocketmovies:user")
        localStorage.removeItem("@rocketmovies:token")

        setData({})
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketmovies:token")
        const user = localStorage.getItem("@rocketmovies:user")

        setData({
            token,
            user : JSON.parse(user)
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            user : data.user,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth}