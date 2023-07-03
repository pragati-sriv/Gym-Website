import React from 'react'

function Registration() {
  return (
    <div>
        <h3>Register Here...</h3>
        <form>
        <labe>
            UserName:
        </labe>
        <input type="name"/>
        <label>
            Email:
        </label>
        <input type="email"/>
        <label>
            Password:
        </label>
        <input type="password"/>
        <label>
            Confirm Password
        </label>
        <input type="password"/>

        <button>Register</button>
        <h4>Already have an account?Login</h4>
        </form>
    </div>
  )
}
export default Registration