import {useState} from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom'
import { Alert } from './Alert';

export const Login = () => {

  const [user, setUser] = useState({
    email:"",
    password:"",
  });
  const {login, loginWithGoogle} = useAuth()
  const navigate=useNavigate()
  const [error, setError] = useState();


const handleSubmit=async (e)=>{
  e.preventDefault()
 setError('')
  try {
    await login(user.email, user.password)
    navigate("/")
  } catch (error) {
    console.log(error.message)
  }

}

 const handleGoogleSignIn =async()=>{
    try {
        await loginWithGoogle()
        navigate("/")
    } catch (error) {
      console.log(error.message)
    }
 }

  const handleChange=({target:{name, value}}) => {
    setUser({...user,[name]:value})
  }
return(
<div className="col-md-4 offset-md-4   " >
{error && <Alert messsge={error}/>}
<div className="abs-center">
<form onSubmit={handleSubmit} className="card card-body bg-secondary border p-3 form ">
  <label htmlFor="email" className="form-label">Email</label>
  <input
  type="email"
  name="email"
  placeholder="xxx@xxxmail.xxx"
  class="form-control"
    onChange={handleChange}
  />
   <div class="mb-3">
  <label htmlFor="password" className="form-label">Password</label>
  <input type="password"
  name="password"
   id="password"
   class="form-control"
   onChange={handleChange}
  />
  </div>
  
  <button className="btn btn-primary btn-block">Login</button>
  
  <button onClick={handleGoogleSignIn}  className="btn btn-primary btn-block">Login With Google</button>
</form>

    </div>
</div>)

};
