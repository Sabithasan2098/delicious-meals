import { Link } from "react-router-dom";
import loginImage from "../../../../public/login-register.avif";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Provider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const captchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const result = { email, password };
    console.log(result);

    login(email, password)
      .then((data) => {
        console.log(data);
      })
      .then((error) => {
        console.log(error.message);
      });
  };

  const [disabled, setDisabled] = useState(true);

  const handleCaptcha = () => {
    const captcha = captchaRef.current.value;
    if (validateCaptcha(captcha)) {
      setDisabled(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Awesome meals || login</title>
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
              <form onSubmit={handleSubmit} className="card-body">
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
                  <LoadCanvasTemplate />
                  <input
                    type="text"
                    name="recapcha"
                    ref={captchaRef}
                    placeholder="Type which you see in the picture"
                    className="input input-bordered"
                    required
                  />
                  <button
                    onClick={handleCaptcha}
                    className="btn btn-outline btn-xs mt-3"
                  >
                    Validate
                  </button>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                    disabled={disabled}
                  />
                </div>
                <p className="text-md font-bold text-[#001F3F]">
                  Do not have an account.Please{" "}
                  <Link to={"/register"} className="underline text-yellow-400">
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
