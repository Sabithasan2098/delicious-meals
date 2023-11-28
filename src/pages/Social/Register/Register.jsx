import { Link } from "react-router-dom";
import register from "../../../../public/login-register.avif";
import { Helmet } from "react-helmet-async";

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Awesome meals || register</title>
      </Helmet>
      <div className="flex md:flex-row sm:flex-row ">
        <div className="">
          <img src={register} alt="" />
        </div>
        <div className="hero min-h-screen lg:absolute -top-24">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p className="text-md font-bold text-[#001F3F]">
                  All ready have an account.Please{" "}
                  <Link to={"/login"} className="underline text-yellow-500">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
