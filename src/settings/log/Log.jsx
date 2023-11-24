import {Link} from 'react-router-dom'
import "./log.scss"
const Log = () => {
  return (
    <div className='lognup'>
    <div className='card'>
        <div className='left'>
            <h1>Sîka Social network</h1>
            <p>Le lorem ipsum (également appelé faux-texte, 
            lipsum, ou bolo bolo) est, en imprimerie, 
            </p>
            <span>Don't you have an account ?</span>
            <Link to="/log"><button>Login</button></Link>

        </div>
        <div className='right'>
          <h1 className=''>Sign up</h1>
          <form>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <button>Register</button>
          </form>
        </div>
    </div>
</div>
  )
}

export default Log