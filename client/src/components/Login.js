import {React, useEffect} from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'

export default function Login({onLogin}) {
    const navigate = useNavigate()


    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);




    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username,password})
        })
        .then((r)=>{
            setIsLoading(false)
            if(r.ok){
                r.json().then((user)=>{
                    onLogin(user)
                    navigate('/')
                })

            }else{
                r.json().then((err) => setErrors(err.errors))

            }

        })


    }


    return (
        <Container  >

            <Col  lg="9" md="6" sm="12">
            <div className="col-sm-6 box">


<form onSubmit={handleSubmit} className='form-box'>
<h2 className="mb-3">Login</h2>
{errors?.map((err) => (
    <div  class="alert alert-danger" role="alert" key={err}>{err}</div>
))}
    <div className="mb-2">
        <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Username"
            value={username}
            onChange={(e) =>{
                setUserName(e.target.value)
                setErrors(null)
                }}
            required
        />
    </div>
    <div className="mb-2">
        <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>{
                setPassword(e.target.value)
                setErrors(null)
                }}
            required
        />
    </div>
    <div>
        <p className="my-3">
            Don't have an account?{' '}
            <a href="#/" className="text-decoration-none"
            onClick={() => navigate("/signup")}>Sign up here</a>
        </p>
    </div>
    <button type="submit" className="btn btn-danger">Login</button>
</form>
</div>

            </Col>


        </Container>
    )
}
