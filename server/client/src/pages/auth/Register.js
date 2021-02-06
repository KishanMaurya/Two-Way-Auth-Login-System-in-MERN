import React, { useState , useEffect} from 'react'
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch , useSelector } from "react-redux"
import { createOrUpdateUser } from "../../functions/auth"

const Register = ({history}) => {
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);

    let dispatch = useDispatch();
    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
      if (user && user.token) history.push("/");
    }, [user, history]);

    //role based Redirect to
  const roleBasedrediect = (res) =>{
    if(res.data.role === "user"){
      history.push('/user/history')
    } else {
      history.push('/user/history')
    }
  }
    const handleSubmit=async (e) => {
        e.preventDefault();
        try {
            const result= await auth.createUserWithEmailAndPassword(email, password)
            const { user } = result;
            const idTokenResult = await user.getIdTokenResult();

            createOrUpdateUser(idTokenResult.token)
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
                })
                roleBasedrediect(res)
            })
            .catch(err=> console.log(err));
            history.push("/user/history");
            
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            setLoading(false);
        }
        setEmail("");
        setPassword("")
    }
    const registerForm = (e) =>{
        return (
            <form onSubmit={handleSubmit}>
            <div className="form-group">
            <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                    placeholder="Enter email !"
                />
            </div>
            <div className="form-group">
            <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                    placeholder="Enter Password !"
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-raised">
                    Register
                </button>
            </div>
            </form>
        )
    }
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {loading ? (
                        <h4 className="text-danger">Loading...</h4>
                    ) : (
                        <h4>Register</h4>
                    )}
                    {registerForm()}
                </div>
            </div>
        </div>
    )
}

export default Register
