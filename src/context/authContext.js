import { createContext, useContext, useState  } from "react";
import { useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from'../firebase'

export const authContext = createContext()

export const useAuth=()=>{
    const context= useContext(authContext)
    if(!context)throw Error("Este no autenticación no es valida")
    return context
}

export function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading]=useState(true)
    
    const signup =(email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async (email, password)=>{
     return   signInWithEmailAndPassword(auth, email, password)
    }

    const logout=()=> signOut(auth)

    const loginWithGoogle =()=>{
        const googleProvider = new GoogleAuthProvider()
       return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
     onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
     })
    }, []);
    

    return(
        <authContext.Provider value={{signup, login, user, logout, loading,  loginWithGoogle}}>
            {children}  
        </authContext.Provider>)
}