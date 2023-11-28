import { useContext, useEffect, useRef, useState } from "react";
import loginImage from "../../../../public/login-register.avif";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../../Providers/Provider";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const { loginUser } = useContext(AuthProvider);
  const capthaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const [disabled, setDisabled] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password).then((result) => {
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
  const handleValidateCaptcha = () => {
    const value = capthaRef.current.value;
    console.log(value);
    if (validateCaptcha(value)) {
      setDisabled(false);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Delicious meals || login</title>
      </Helmet>
      <div className="flex md:flex-row sm:flex-row ">
        <div className="">
          <img src={loginImage} alt="" />
        </div>
        <div className="hero min-h-screen lg:absolute -top-24">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
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
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    ref={capthaRef}
                    placeholder="fill the captcha"
                    className="input input-bordered"
                    required
                  />
                  <button
                    onClick={handleValidateCaptcha}
                    className="btn btn-xs mt-2"
                  >
                    submit
                  </button>
                </div>
                <div className="form-control mt-6">
                  <button disabled={disabled} className="btn btn-primary">
                    Login
                  </button>
                </div>
                <p className="text-md font-bold text-[#001F3F]">
                  All ready have an account.Please{" "}
                  <Link to={"/register"} className="underline text-yellow-500">
                    Register
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

export default Login;
