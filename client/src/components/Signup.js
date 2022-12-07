import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
export default function SignupClient() {
    const navigate = useNavigate()
    const url = 'http://localhost:8000/clientregistration'
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [address,setAddress] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        e.target.reset()
        let data;
        if (password === confirmPassword) {
            data = {
                firstname: firstName,
                lastname: lastName,
                username: username,
                location: location,
                email: email,
                phonenumber: phoneNumber,
                password: password,
                address: address
            }
            setError("")
            fetch('/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }).then(res => {
                console.log(res)
                if (res.ok) {
                    setSuccess("Signup Success")
                    navigate('/login', {
                        state: {
                            message: "Signup was Successful. You can now login!"
                        }
                    })
                } else {
                    setError("Sign up failed. Try again")
                }
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setFirstName('');
                setLastName('');
                setUsername('');
                setLocation('');
                setPhoneNumber('');
            })
        } else {
            setError("Passwords do not match")
        }
    }

    return (
        <Container>
            <div className="col-sm-6">
            <h2 className="mb-3">Sign up</h2>
            {error ? <div className="alert alert-danger" role="alert">{error}</div> : null}
            {success ? <div className="alert alert-success" role="alert">{success}</div> : null}
            <form onSubmit={handleSubmit}>
                <div className="row mb-2">
                <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                    <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={lastName}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <input

                            className="form-control"
                            id="location"
                            placeholder="PhoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>

                     
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div>
                    <p className="my-3">
                        Already have an account?{' '}
                        <a href="#/" className="text-decoration-none" onClick={() => navigate("/login")}>
                            Login here
                        </a>
                    </p>
                    <p className="my-3">
                        Sign up as a {' '}
                        <a href="#/" className="text-decoration-none" onClick={() => navigate("/signup-as-sitter")}>
                            Sitter
                        </a>
                    </p>
                </div>
                <button type="submit" className="btn btn-danger">Sign up</button>
            </form>
        </div>
        </Container>
    )
}
