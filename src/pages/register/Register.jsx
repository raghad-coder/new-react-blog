import "./register.css"

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label> Username </label>
        <input type="text" className="registerInput" placeholder=" Enter your username....." />
        <label> Password </label>
        <input type="password" className="registerInput" placeholder=" Enter your password ..." />
        <button className="registerBtn"> Register </button>
      </form>
      <button className="registerLoginBtn"> Login </button>
    </div>
  )
}
