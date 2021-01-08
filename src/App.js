import './App.css';
import React ,{ useEffect} from 'react'
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from './components/nav/Header'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "./firebase"
import { useDispatch } from 'react-redux'
import { currentUser } from './functions/auth'
import History from './pages/User/History'
import UserRoutes from './components/routes/UserRoutes'

const App=()=> {
  const dispatch = useDispatch()

  // to check firebase auth 
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async (user)=>{
      if(user){
        const idTokenResult= await user.getIdTokenResult()
        console.log("User=>",user)
        currentUser(idTokenResult.token)
        .then((res) => {
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id
            },
          });
        })
        .catch(err=> console.log(err));
      }
    })
    return ()=> unsubscribe()
  },[])

  return (
    <>
    <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <UserRoutes exact path="/user/history" component={History} />
      </Switch>
    </>
  );
}

export default App;
