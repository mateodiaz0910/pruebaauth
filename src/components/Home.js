
import { useAuth } from "../context/authContext";



export function Home () {

  const{user, logout, loading}= useAuth()

console.log(user)
  const handleLogout=async()=>{
    try {
      await logout()
    } catch (error) {
      console.error(error)
    }
  }

  if(loading) return <h1>loading</h1>

  return <div>
    <h1>Welcome {user.displayName || user.email}</h1>

    <button onClick={handleLogout}  className="btn btn-primary btn-block">
      logout
    </button>
    </div>;
};

