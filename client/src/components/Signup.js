import React, {useState,useRef} from "react";
import {useNavigate,Link} from "react-router-dom";
import {Container,Row,Col} from 'reactstrap'
import '../styles/reg.css'
export default function SignupClient({onLogin}) {
  const navigate = useNavigate()
  const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [phonenumber,setPhoneNumber] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          phonenumber,
          password
        }),
      })
        .then((r) => {
          if(r.ok){
            r.json().then((user)=>{

                 onLogin(user)
                 navigate('/')
            })

        }else{
            r.json().then((err) => setErrors(err.errors))

        }
        })
        .then(onLogin);
    }



    return (
    <Container>
      <Col lg="6" md="6" sm="12" className="m-auto text-center" >
        <h2>Signup to foodplus</h2>
        {errors?.map((err) => (
                    <div  class="alert alert-danger" role="alert" key={err}>{err}</div>
                ))}
        <form className="form mb-5" onSubmit={handleSubmit}   >
        <div className="mb-2"  >
          <input
           type="text"
           placeholder="Username"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           required
           className="form-control form-control-lg"
          />
       </div>
       <div className= "mb-2"  >
         <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
           className="form-control form-control-lg"
         />
       </div>
       <div className= "mb-2"  >
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control form-control-lg"
          />
       </div>
       <div className= "mb-2"  >
        <input
          type="password"
          placeholder="confirm password"
          value = {passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
          className="form-control form-control-lg"
        />
       </div>
       <div className= "mb-2"  >
          <input
            placeholder="Enter phone number"
            required
            value ={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
      <button type="submit" className="btn btn-danger">
        Sign Up
       </button>
      </form>
      <Link to="/login">Already have an account? Login</Link>
    </Col>
  </Container>

    )
}
