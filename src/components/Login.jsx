import React,{useState} from 'react'

const  Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submit, setSubmit] = useState({
    email: '',
    password: ''
  })
  console.log(email)
  console.log(password)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit({
      email: email,
      password: password
    })
  }
  console.log(submit)
  return (
    <div>
      <h1>Login page</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label><br /><input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" id="email" name="email"/><br />
          <label htmlFor="password">Password</label><br /><input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" name="password"/><br />
          <button type='submit' className="bg-red-500 text-white px-10 py-5">Submit!</button>
        </form>
    </div>
  )
}

export default Login