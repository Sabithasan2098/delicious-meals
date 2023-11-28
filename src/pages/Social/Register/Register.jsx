import { Link } from "react-router-dom";
import registerImage from "../../../../public/login-register.avif";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthProvider } from "../../../Providers/Provider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthProvider);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password).then((result) => {
      console.log(result.user);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div>
      <Helmet>
        <title>Delicious meals || register</title>
      </Helmet>
      <div className="flex md:flex-row sm:flex-row ">
        <div className="">
          <img src={registerImage} alt="" />
        </div>
        <div className="hero min-h-screen lg:absolute -top-24">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
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
                    name="password"
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
