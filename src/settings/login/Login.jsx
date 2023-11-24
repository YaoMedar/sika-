import {Link} from 'react-router-dom'
import './login.scss'
const Login = () => {
  return (
    <div className='login'>
    <div className='card'>
        <div className='left'>
          <h1>Sîka Social website</h1>
          <p>Le lorem ipsum (également appelé faux-texte, 
            lipsum, ou bolo bolo) est, en imprimerie, 
          </p>
          <span>Don't you have an account ?</span>
          <Link to="/login"><button>Register</button></Link>

        </div>
        <div className='right'>
          <h1 className=''>Sign in</h1>
          <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="password" />
              <button>Login</button>
          </form>
        </div>
    </div>
</div>
  )
}

export default Login