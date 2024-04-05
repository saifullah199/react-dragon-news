import { Link } from "react-router-dom";
import Navbar from "../routes/layouts/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
    const{createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        

        const name = form.get('name')
        const photo =form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        console.log(name, photo, email, password)

//  create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
                  <Navbar></Navbar>
            <h3 className="text-center"> Please Register </h3>

            <div>
            <form onSubmit={handleRegister} className="card-body lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      <p className="text-center">Already have an account ? <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;