import React from 'react'

export default function Login() {
  return (
    <div className="col-sm-6">
    <h2 className="mb-3">Login</h2>


    <form >
        <div className="mb-2">
            <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Username"

                required
            />
        </div>
        <div className="mb-2">
            <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"

                required
            />
        </div>
        <div>
            <p className="my-3">
                Don't have an account?{' '}
                <a href="#/" className="text-decoration-none"
                    >Sign up here</a>
            </p>
        </div>
        <button type="submit" className="btn  btn-warning">Login</button>
    </form>
</div>
  )
}
